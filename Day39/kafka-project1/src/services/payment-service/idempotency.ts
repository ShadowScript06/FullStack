// In production this would be Redis or a database
// For now an in-memory Set works perfectly to demonstrate the concept
const processedOrders = new Set<string>()

export const isAlreadyProcessed = (orderId: string): boolean => {
  return processedOrders.has(orderId)
}

export const markAsProcessed = (orderId: string): void => {
  processedOrders.add(orderId)
}