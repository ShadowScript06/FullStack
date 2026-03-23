export interface OrderEvent {
  orderId: string
  item: string
  price: number
  timestamp: string
}

// New — we'll use this to log what we receive
export interface ReceivedMessage {
  topic: string
  partition: number
  offset: string
  key: string
  order: OrderEvent
}