import { Module } from '@nestjs/common';
import { EmployeeEventsConsumer } from './employee-events-consumer';

@Module({
  providers: [EmployeeEventsConsumer]
})
export class EmployeeEventsModule {}
