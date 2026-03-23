import { Kafka, Producer, Message } from 'kafkajs'
import { OrderEvent } from './types'

const kafka = new Kafka({
  clientId: 'kafka-masterclass',
  brokers: ['localhost:9092'],
})

const producer: Producer = kafka.producer()

const createOrderMessage = (index: number): Message => {
  const order: OrderEvent = {
    orderId: `order-${index}`,
    item: index % 2 === 0 ? 'Laptop' : 'Phone',
    price: 100 * index,
    timestamp: new Date().toISOString(),
  }

  return {
    // KEY is what determines which partition a message goes to
    // Kafka hashes the key → picks a partition
    // Same key ALWAYS goes to same partition — ordering guaranteed per key
    key: order.orderId,
    value: JSON.stringify(order),
  }
}

const runProducer = async (): Promise<void> => {
  await producer.connect()
  console.log('Producer connected\n')

  for (let i = 1; i <= 15; i++) {
    const message = createOrderMessage(i)

    await producer.send({
      topic: 'order-events',
      messages: [message],
    })

    console.log(`Sent order-${i}`)
    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  await producer.disconnect()
  console.log('\nAll 15 orders sent. Producer disconnected.')
}

runProducer().catch(console.error)