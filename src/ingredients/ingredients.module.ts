import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from 'src/recipe/recipe.module';
import { ControllerController } from './controller/controller.controller';
import { IngredientsEntity } from './models/ingredients.entity';
import { ServiceService } from './service/service.service';

@Module({
  imports: [TypeOrmModule.forFeature([IngredientsEntity]), BlogModule],
  controllers: [ControllerController],
  providers: [ServiceService],
})
export class IngredientsModule {}
