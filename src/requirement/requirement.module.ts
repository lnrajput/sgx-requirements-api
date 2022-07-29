import { Module } from '@nestjs/common';
import { RequirementService } from './requirement.service';
import { RequirementController } from './requirement.controller';
import { Emp2reqConsumer } from './emp2req-consumer';
import { EmployeeEventsConsumer } from 'src/employee-events/employee-events-consumer';
import { EmployeeEventsModule } from 'src/employee-events/employee-events.module';
import { Emp2reqMapper } from './emp2req-mapper';

@Module({
  imports: [EmployeeEventsModule],
  controllers: [RequirementController],
  providers: [RequirementService, Emp2reqConsumer,EmployeeEventsConsumer, Emp2reqMapper]
})
export class RequirementModule {}
