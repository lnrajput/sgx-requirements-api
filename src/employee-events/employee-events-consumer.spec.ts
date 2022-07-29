import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeEventsConsumer } from './employee-events-consumer';

describe('EmployeeEventsConsumer', () => {
  let provider: EmployeeEventsConsumer;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeEventsConsumer],
    }).compile();

    provider = module.get<EmployeeEventsConsumer>(EmployeeEventsConsumer);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
