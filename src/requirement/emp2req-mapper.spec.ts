import { Test, TestingModule } from '@nestjs/testing';
import { Emp2reqMapper } from './emp2req-mapper';

describe('Emp2reqMapper', () => {
  let provider: Emp2reqMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Emp2reqMapper],
    }).compile();

    provider = module.get<Emp2reqMapper>(Emp2reqMapper);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
