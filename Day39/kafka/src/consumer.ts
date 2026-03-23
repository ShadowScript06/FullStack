import { Kafka, Consumer, EachMessagePayload } from 'kafkajs'
import { OrderEvent, ReceivedMessage } from './types'

const kafka = new Kafka({
  clientId: 'kafka-masterclass',
  brokers: ['localhost:9092'],
})

// consumerId comes from command line: ts-node src/consumer.ts consumer-1
// This lets us run 3 terminals with different IDs to SEE the group in action
const consumerId = process.argv[2] ?? 'consumer-1'

const consumer: Consumer = kafka.consumer({
  groupId: 'order-processing-group',  // same group = they share partitions
})

const handleMessage = (consumerId: string) => 
  async ({ topic, partition, message }: EachMessagePayload): Promise<void> => {
    const raw = message.value?.toString()
    if (!raw) return

    const order: OrderEvent = JSON.parse(raw)

    const received: ReceivedMessage = {
      topic,
      partition,
      offset: message.offset,
      key: message.key?.toString() ?? '',
      order,
    }

    // Print which consumer got it, which partition, which offset
    console.log(`[${consumerId}] partition=${partition} offset=${received.offset} → ${order.orderId} (${order.item} $${order.price})`)
  }

const runConsumer = async (): Promise<void> => {
  await consumer.connect()

  await consumer.subscribe({
    topic: 'order-events',
    fromBeginning: true,
  })

  console.log(`[${consumerId}] connected — part of group 'order-processing-group'\n`)

  await consumer.run({
    eachMessage: handleMessage(consumerId),
  })
}

runConsumer().catch(console.error)