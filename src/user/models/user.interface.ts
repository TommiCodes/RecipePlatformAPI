import { CommentsEntry } from 'src/comments/model/comments.interface';
import { RecipeEntry } from 'src/recipe/model/recipe-entry.interface';

export interface User {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  role?: UserRole;
  profileImage?: string;
  recipeEntries?: RecipeEntry[];
  commentEntries?: CommentsEntry[];
  favourite?: boolean;
}

export enum UserRole {
  ADMIN = 'admin',
  CHIEFEDITOR = 'chiefeditor',
  EDITOR = 'editor',
  USER = 'user',
}
