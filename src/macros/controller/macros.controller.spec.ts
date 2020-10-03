import { Test, TestingModule } from '@nestjs/testing';
import { MacrosController } from './macros.controller';

describe('MacrosController', () => {
  let controller: MacrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MacrosController],
    }).compile();

    controller = module.get<MacrosController>(MacrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
