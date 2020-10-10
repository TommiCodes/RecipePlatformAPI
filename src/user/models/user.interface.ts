import { CommentsEntity } from 'src/comments/model/comments.entity';
import { CommentsEntry } from 'src/comments/model/comments.interface';
import { RecipeEntity } from 'src/recipe/model/recipe-entry.entity';
import { RecipeEntry } from 'src/recipe/model/recipe-entry.interface';

export interface User {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  role?: UserRole;
  profileImage?: string;
  recipeEntries?: RecipeEntity[];
  commentEntries?: CommentsEntity[];
}

export enum UserRole {
  ADMIN = 'admin',
  CHIEFEDITOR = 'chiefeditor',
  EDITOR = 'editor',
  USER = 'user',
}
