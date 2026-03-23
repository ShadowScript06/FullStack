import { kafka } from '../../kafka';
import { OrderCreatedEvent, PaymentProcessedEvent } from '../../types';

import { EachMessagePayload } from 'kafkajs'

const consumer = kafka.consumer({ groupId: 'notification-group' })

const handleMessage = async ({ topic, message }: EachMessagePayload): Promise<void> => {
  const raw = message.value?.toString()
  if (!raw) return

  // Same consumer, two topics — we switch on topic name
  if (topic === 'order-created') {
    const order: OrderCreatedEvent = JSON.parse(raw)
    console.log(`[Notification Service] Order confirmation email sent to customer ${order.customerId}`)
    console.log(`  → "Your order ${order.orderId} for ${order.item} has been placed!"`)
  }

  if (topic === 'payment-processed') {
    const payment: PaymentProcessedEvent = JSON.parse(raw)
    const emoji = payment.status === 'success' ? 'Payment received' : 'Payment failed'
    console.log(`[Notification Service] Payment SMS sent to customer ${payment.customerId}`)
    console.log(`  → "${emoji} for order ${payment.orderId} — $${payment.amount}"`)
  }
}

const start = async (): Promise<void> => {
  await consumer.connect()

  // Notification service subscribes to BOTH topics
  await consumer.subscribe({ topic: 'order-created', fromBeginning: false })
  await consumer.subscribe({ topic: 'payment-processed', fromBeginning: false })

  console.log('[Notification Service] Running — listening to order-created + payment-processed\n')

  await consumer.run({ eachMessage: handleMessage })
}

start().catch(console.error)