import { Test, TestingModule } from '@nestjs/testing';
import { MacrosService } from './macros.service';

describe('MacrosService', () => {
  let service: MacrosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MacrosService],
    }).compile();

    service = module.get<MacrosService>(MacrosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
