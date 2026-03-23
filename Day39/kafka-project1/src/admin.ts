import { kafka } from './kafka'

const admin = kafka.admin()

const setupTopics = async (): Promise<void> => {
  await admin.connect()
  console.log('Admin connected')

  const existing = await admin.listTopics()

  const allTopics = [
    'order-created',
    'payment-processed',
    'order-created.retry',     // failed messages come here first
    'order-created.dlq',       // permanently failed messages end up here
  ]

  const toCreate = allTopics.filter((t) => !existing.includes(t))

  if (toCreate.length === 0) {
    console.log('All topics already exist')
  } else {
    await admin.createTopics({
      topics: toCreate.map((topic) => ({
        topic,
        numPartitions: 3,
        replicationFactor: 1,
      })),
    })
    console.log(`Created: ${toCreate.join(', ')}`)
  }

  const metadata = await admin.fetchTopicMetadata({ topics: allTopics })
  metadata.topics.forEach((t) => {
    console.log(`Topic: ${t.name} — ${t.partitions.length} partitions`)
  })

  await admin.disconnect()
  console.log('\nAll topics ready.')
}

setupTopics().catch(console.error)