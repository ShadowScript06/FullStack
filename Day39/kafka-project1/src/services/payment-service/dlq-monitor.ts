import { kafka } from '../../kafka'
import { FailedEvent } from '../../types'

// A separate process that watches the DLQ and alerts you
const consumer = kafka.consumer({ groupId: 'dlq-monitor-group' })

const start = async (): Promise<void> => {
  await consumer.connect()
  await consumer.subscribe({ topic: 'order-created.dlq', fromBeginning: true })

  console.log('[DLQ Monitor] Watching for failed messages...\n')

  await consumer.run({
    eachMessage: async ({ message }) => {
      const raw = message.value?.toString()
      if (!raw) return

      const failed: FailedEvent = JSON.parse(raw)

      // In production: send a Slack alert, PagerDuty, email, etc.
      console.error('========================================')
      console.error('[DLQ ALERT] Failed message detected!')
      console.error(`  Topic:    ${failed.originalTopic}`)
      console.error(`  Error:    ${failed.errorMessage}`)
      console.error(`  Attempts: ${failed.attemptNumber}`)
      console.error(`  Failed at: ${failed.failedAt}`)
      console.error(`  Message:  ${failed.originalMessage}`)
      console.error('========================================\n')
    },
  })
}

start().catch(console.error)