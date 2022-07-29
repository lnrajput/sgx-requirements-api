import { Test, TestingModule } from '@nestjs/testing';
import { Emp2reqConsumer } from './emp2req-consumer';

describe('Emp2reqConsumer', () => {
  let provider: Emp2reqConsumer;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Emp2reqConsumer],
    }).compile();

    provider = module.get<Emp2reqConsumer>(Emp2reqConsumer);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
