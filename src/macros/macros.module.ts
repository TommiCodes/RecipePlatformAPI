import { forwardRef, Module } from '@nestjs/common';
import { MacrosService } from './service/macros.service';
import { MacrosController } from './controller/macros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MacroEntity } from './models/macros.entity';
import { BlogModule } from '../recipe/recipe.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([MacroEntity]),
    forwardRef(() => BlogModule),
  ],
  providers: [MacrosService],
  controllers: [MacrosController],
})
export class MacrosModule {}
