import { kafka } from '../../kafka'
import { OrderCreatedEvent, PaymentProcessedEvent, FailedEvent } from '../../types'
import { EachMessagePayload } from 'kafkajs'
import { isAlreadyProcessed, markAsProcessed } from './idempotency'

const consumer = kafka.consumer({
  groupId: 'payment-group',
  // retry config — how long to wait for the broker before giving up per request
  retry: { retries: 3 },
})

const producer = kafka.producer({
  // idempotent producer — Kafka assigns each message a sequence number
  // if you retry a send, Kafka deduplicates it on the broker side too
  idempotent: true,
})

const MAX_RETRIES = 3

// Simulates a payment that randomly fails 40% of the time
// so you can SEE the retry + DLQ logic trigger
const simulatePayment = async (order: OrderCreatedEvent): Promise<void> => {
  const shouldFail = Math.random() < 0.4
  if (shouldFail) {
    throw new Error(`Payment gateway timeout for order ${order.orderId}`)
  }
  // simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 500))
}

const processWithRetry = async (
  order: OrderCreatedEvent,
  attemptNumber: number = 1
): Promise<void> => {
  try {
    console.log(`[Payment] Attempt ${attemptNumber} for ${order.orderId}`)

    await simulatePayment(order)

    // Success — publish result and mark as done
    const payment: PaymentProcessedEvent = {
      paymentId: `pay-${Date.now()}`,
      orderId: order.orderId,
      customerId: order.customerId,
      amount: order.price,
      status: 'success',
      timestamp: new Date().toISOString(),
    }

    await producer.send({
      topic: 'payment-processed',
      messages: [{ key: order.orderId, value: JSON.stringify(payment) }],
    })

    // Mark as processed AFTER successful publish
    // so if publish fails we still retry next time
    markAsProcessed(order.orderId)
    console.log(`[Payment] Success on attempt ${attemptNumber} for ${order.orderId}`)

  } catch (error) {
    const err = error as Error
    console.error(`[Payment] Attempt ${attemptNumber} failed: ${err.message}`)

    if (attemptNumber < MAX_RETRIES) {
      // Exponential backoff — wait longer each retry
      const delay = Math.pow(2, attemptNumber) * 1000  // 2s, 4s, 8s
      console.log(`[Payment] Retrying in ${delay / 1000}s...`)

      await new Promise((resolve) => setTimeout(resolve, delay))

      // publish to retry topic so it's tracked in Kafka
      await producer.send({
        topic: 'order-created.retry',
        messages: [{
          key: order.orderId,
          value: JSON.stringify({ ...order, attemptNumber }),
        }],
      })

      // recursively retry with incremented attempt number
      await processWithRetry(order, attemptNumber + 1)

    } else {
      // All retries exhausted — send to DLQ
      console.error(`[Payment] All ${MAX_RETRIES} attempts failed. Sending to DLQ.`)

      const failed: FailedEvent = {
        originalTopic: 'order-created',
        originalMessage: JSON.stringify(order),
        errorMessage: err.message,
        attemptNumber,
        failedAt: new Date().toISOString(),
      }

      await producer.send({
        topic: 'order-created.dlq',
        messages: [{ key: order.orderId, value: JSON.stringify(failed) }],
      })

      console.error(`[Payment] Order ${order.orderId} sent to DLQ`)
    }
  }
}

const handleMessage = async ({ message }: EachMessagePayload): Promise<void> => {
  const raw = message.value?.toString()
  if (!raw) return

  const order: OrderCreatedEvent = JSON.parse(raw)

  // Idempotency check — have we already successfully processed this order?
  if (isAlreadyProcessed(order.orderId)) {
    console.log(`[Payment] Skipping duplicate: ${order.orderId}`)
    return
  }

  await processWithRetry(order)
}

// Graceful shutdown — finish current message before stopping
const shutdown = async (): Promise<void> => {
  console.log('\n[Payment] Shutting down gracefully...')
  await consumer.disconnect()
  await producer.disconnect()
  console.log('[Payment] Disconnected cleanly.')
  process.exit(0)
}

process.on('SIGINT', shutdown)   // Ctrl+C
process.on('SIGTERM', shutdown)  // Docker stop

const start = async (): Promise<void> => {
  await consumer.connect()
  await producer.connect()
  await consumer.subscribe({ topic: 'order-created', fromBeginning: false })

  console.log('[Payment Service] Running with retries + DLQ + idempotency\n')

  await consumer.run({ eachMessage: handleMessage })
}

start().catch(console.error)