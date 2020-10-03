import { Module } from '@nestjs/common';
import { MacrosService } from './service/macros.service';
import { MacrosController } from './controller/macros.controller';

@Module({
  providers: [MacrosService],
  controllers: [MacrosController],
})
export class MacrosModule {}
