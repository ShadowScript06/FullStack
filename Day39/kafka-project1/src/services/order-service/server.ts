import express, { Request, Response } from 'express'
import { kafka } from '../../kafka'
import { OrderCreatedEvent } from '../../types'

const app = express()
app.use(express.json())

const producer = kafka.producer()

// Called once on startup
const startProducer = async (): Promise<void> => {
  await producer.connect()
  console.log('[Order Service] Producer connected')
}

// POST /orders — the only endpoint
app.post('/orders', async (req: Request, res: Response) => {
  const { customerId, item, price } = req.body

  // Build the order
  const order: OrderCreatedEvent = {
    orderId: `order-${Date.now()}`,
    customerId,
    item,
    price,
    timestamp: new Date().toISOString(),
  }

  // Publish to Kafka — fire and forget
  // Order service doesn't wait for payment or notification to finish
  await producer.send({
    topic: 'order-created',
    messages: [
      {
        key: order.orderId,   // same orderId = same partition = guaranteed ordering per order
        value: JSON.stringify(order),
      },
    ],
  })

  console.log(`[Order Service] Published order: ${order.orderId}`)

  // Respond immediately — Kafka handles the rest asynchronously
  res.status(201).json({
    message: 'Order placed successfully',
    orderId: order.orderId,
  })
})

const start = async (): Promise<void> => {
  await startProducer()
  app.listen(3000, () => {
    console.log('[Order Service] API running on http://localhost:3000')
    console.log('[Order Service] Try: POST http://localhost:3000/orders')
  })
}

start().catch(console.error);