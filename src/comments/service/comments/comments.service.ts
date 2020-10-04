import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CommentsEntity } from 'src/comments/model/comments.entity';
import { CommentsEntry } from 'src/comments/model/comments.interface';
import { RecipeEntity } from 'src/recipe/model/recipe-entry.entity';
import { RecipeEntry } from 'src/recipe/model/recipe-entry.interface';
import { RecipeService } from 'src/recipe/service/recipe.service';
import { User } from 'src/user/models/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentsEntity)
    private readonly commentRepository: Repository<CommentsEntity>,
  ) {}

  /*
  async addComment(recipeId, commentsEntry: CommentsEntry) {
    const recipe = await this.recipeRepository.find(recipeId);
    const result = recipe.map(c => {
      c.comments.push(commentsEntry);
    });
    console.log(result);
    return result;
  }

  private async findRecipe(id: number): Promise<RecipeEntry> {
    let recipe;
    try {
      recipe = await this.commentRepository.findOne(id);
      console.log(id);
      console.log(recipe);
    } catch (error) {
      throw new NotFoundException('could not find recipe');
    }
    if (!recipe) {
      throw new NotFoundException('could not find recipe');
    }
    return recipe;
  }*/
}
