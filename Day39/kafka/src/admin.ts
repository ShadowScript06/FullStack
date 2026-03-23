import { Kafka ,Admin} from "kafkajs";
import { resolve } from "node:dns";

const kafka=new Kafka({
    clientId:'kafka-masterclass',
    brokers:['localhost:9092'],
});

const admin:Admin=kafka.admin();

const setuptopics=async():Promise<void> =>{
    await admin.connect();

    console.log("Admin connected");

    const existingTopics=await  admin.listTopics();

    if(existingTopics.includes('order-events')){
        await admin.deleteTopics({topics:['order-events']});

        console.log('Deleted existing order-events topic');

        await new Promise((resolve)=>setTimeout(resolve,1000));


    }

    await admin.createTopics({
        topics:[
            {
                topic :'order-events',
                numPartitions:3,
                replicationFactor:1
            }
        ]
    });

    console.log('Created topic: order-events (3 partitoions');

    const metadata=await admin.fetchTopicMetadata({topics:['order-events']});


    metadata.topics.forEach((topic) => {
    console.log(`\nTopic: ${topic.name}`)
    topic.partitions.forEach((p) => {
      console.log(`  Partition ${p.partitionId} → leader: broker ${p.leader}`)
    })
  })

  await admin.disconnect();

  console.log('\nAdmin disconnected. Topic is ready.');

}

setuptopics().catch(console.error);

