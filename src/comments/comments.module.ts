import { Module } from '@nestjs/common';
import { CommentsService } from './service/comments/comments.service';
import { CommentsController } from './controller/comments/comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsEntity } from './model/comments.entity';
import { RecipeEntity } from 'src/recipe/model/recipe-entry.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentsEntity]),
    TypeOrmModule.forFeature([CommentsEntity]),
  ],
  providers: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
