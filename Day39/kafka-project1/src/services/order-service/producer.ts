import express, { Request, Response } from 'express'
import { kafka } from '../../kafka'
import { OrderCreatedEvent } from '../../types'

const app = express()
app.use(express.json())

const producer = kafka.producer()

const startProducer = async (): Promise<void> => {
  await producer.connect()
  console.log('[Order Service] Producer connected')
}

app.post('/orders', async (req: Request, res: Response) => {
  const { customerId, item, price } = req.body

  const order: OrderCreatedEvent = {
    orderId: `order-${Date.now()}`,
    customerId,
    item,
    price,
    timestamp: new Date().toISOString(),
  }

  await producer.send({
    topic: 'order-created',
    messages: [{ key: order.orderId, value: JSON.stringify(order) }],
  })

  console.log(`[Order Service] Published order: ${order.orderId}`)

  res.status(201).json({
    message: 'Order placed successfully',
    orderId: order.orderId,
  })
})

const start = async (): Promise<void> => {
  await startProducer()
  app.listen(3000, () => {
    console.log('[Order Service] API running on http://localhost:3000')
  })
}

start().catch(console.error)