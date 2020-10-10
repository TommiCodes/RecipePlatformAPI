import { RecipeEntity } from 'src/recipe/model/recipe-entry.entity';
import { RecipeEntry } from 'src/recipe/model/recipe-entry.interface';
import { UserEntity } from 'src/user/models/user.entity';
import { User } from 'src/user/models/user.interface';

export interface CommentsEntry {
  id: number;
  createdAt: Date;
  author: UserEntity;
  recipe_id: number;
  comment: RecipeEntity;
  author_id: number;
}
