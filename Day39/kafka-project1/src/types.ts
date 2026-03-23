export interface OrderCreatedEvent {
  orderId: string
  customerId: string
  item: string
  price: number
  timestamp: string
}

export interface PaymentProcessedEvent {
  paymentId: string
  orderId: string
  customerId: string
  amount: number
  status: 'success' | 'failed'
  timestamp: string
}

// New — wraps any failed message with error context
export interface FailedEvent {
  originalTopic: string
  originalMessage: string
  errorMessage: string
  attemptNumber: number
  failedAt: string
}