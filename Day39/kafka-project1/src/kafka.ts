import { Kafka } from 'kafkajs'

// One single Kafka instance shared across all services
export const kafka = new Kafka({
  clientId: 'kafka-masterclass',
  brokers: ['localhost:9092'],
})