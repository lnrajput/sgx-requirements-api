import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { Consumer, ConsumerRunConfig, ConsumerSubscribeTopics, Kafka } from 'kafkajs';

@Injectable()
export class EmployeeEventsConsumer implements  OnApplicationShutdown {
    private readonly kafka = new Kafka({
        brokers: ['pkc-6ojv2.us-west4.gcp.confluent.cloud:9092'],
        sasl: {
            mechanism: 'plain',
            username: 'Y7ZE2ITIHPBJ5QBE',
            password: 'pDT6YthjNu25fGCQUzSuH1e7G8Vj1MgOmFBwry//krlzu1R20RtSz5BxXGd18kco'
        },
        ssl:true
       });
       private readonly consumers: Consumer[]=[];

       async consume(topic: ConsumerSubscribeTopics, config: ConsumerRunConfig){
        const consumer=this.kafka.consumer({groupId: 'emp2req-group'});
        await consumer.connect();
        await consumer.subscribe(topic);
        await consumer.run(config);
        this.consumers.push(consumer);
       }

       async onApplicationShutdown() {
           for(const consumer of this.consumers){
            await consumer.disconnect();
           }
       }
}
