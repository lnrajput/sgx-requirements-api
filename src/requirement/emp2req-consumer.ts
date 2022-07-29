import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { async } from 'rxjs';
import { EmployeeEventsConsumer } from 'src/employee-events/employee-events-consumer';
import { Emp2reqMapper } from './emp2req-mapper';

@Injectable()
export class Emp2reqConsumer implements OnModuleInit{
    constructor(
        private readonly employeeEventsConsumer: EmployeeEventsConsumer,
        private readonly emp2reqMapper: Emp2reqMapper
        ){}
    
    async onModuleInit() {
        await this.employeeEventsConsumer.consume(
            {topics: ['emp2req']},
            {
                eachMessage: async({topic,partition,message})=>{
                    console.log({
                        value: message.value.toString(),
                        topic: topic.toString(),
                        partition: partition.toString()
                    });
                    this.emp2reqMapper.mapEmployeeRequirements(message.value.toString());
                }
            }
        );
    }
;
}
