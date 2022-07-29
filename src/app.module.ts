import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequirementModule } from './requirement/requirement.module';
import { EmployeeEventsModule } from './employee-events/employee-events.module';

@Module({
  imports: [RequirementModule, EmployeeEventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
