import { CommentsEntity } from 'src/comments/model/comments.entity';
import { MacroEntity } from 'src/macros/models/macros.entity';
import { MacroEntry } from 'src/macros/models/macros.interface';
import { UserEntity } from 'src/user/models/user.entity';
//import { CommentsEntity } from 'src/comments/model/comments.entity';
import { User } from 'src/user/models/user.interface';

export interface RecipeEntry {
  id: number;
  title?: string;
  slug?: string;
  description?: string;
  body?: string;
  createdAt?: Date;
  updatedAt?: Date;
  author: User;
  headerImage?: string;
  publishedDate?: Date;
  isPublished?: boolean;
  likes?: number[];
  isLiked?: boolean;
  //comments?: string[];
  ingr?: string[];
  macros?: MacroEntity[];
  totalWeight?: string;
  dietLabels?: string[];
  protein?: string;
  carbs?: string;
  fats?: string;
  sugar?: string;
  calories?: string;
  cholesterol?: string;
  water?: string;
  comments?: CommentsEntity[];
  //commentBody?: string[];
}
