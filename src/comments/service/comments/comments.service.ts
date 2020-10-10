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

  create(recipe: RecipeEntry, comment: CommentsEntry): Observable<CommentsEntry> {
    comment.recipe = recipe;
    return from(this.commentRepository.save(comment));
  }
}
