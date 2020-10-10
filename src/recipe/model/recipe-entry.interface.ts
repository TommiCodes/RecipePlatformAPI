import { CommentsEntry } from 'src/comments/model/comments.interface';
import { MacroEntry } from 'src/macros/models/macros.interface';
import { User } from 'src/user/models/user.interface';

export interface RecipeEntry {
  id: number;
  title?: string;
  slug?: string;
  description?: string;
  body?: string;
  createdAt?: Date;
  updatedAt?: Date;
  author?: User;
  headerImage?: string;
  publishedDate?: Date;
  isPublished?: boolean;
  likes?: number[];
  isLiked?: boolean;
  comments?: CommentsEntry[];

  // Ingredients
  ingr?: string[];
  macros?: MacroEntry[];
  totalWeight?: string;
  dietLabels?: string[];
  protein?: string;
  carbs?: string;
  fats?: string;
  sugar?: string;
  calories?: string;
  cholesterol?: string;
  water?: string;
}
