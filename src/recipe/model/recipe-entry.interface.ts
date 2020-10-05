import { MacroEntity } from 'src/macros/models/macros.entity';
//import { CommentsEntity } from 'src/comments_NOTUSED/model/comments.entity';
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
  comments?: string[];
  ingr: string[];
  macros: MacroEntity[];
  calorieQuantity?: number;
  /*totalWeight?: number;
  dietLabels?: string[];
  proteinQuantity?: number;
  carbQuantity?: number;
  fatQuantity?: number;
  sugarQuantity?: number;
  waterQuantity?: number;*/

  //comments?: CommentsEntity[];
  //commentBody?: string[];
}
