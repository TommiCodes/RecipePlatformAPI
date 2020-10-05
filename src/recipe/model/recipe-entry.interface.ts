//import { CommentsEntity } from 'src/comments_NOTUSED/model/comments.entity';
import { User } from 'src/user/models/user.interface';

export interface RecipeEntry {
  id?: number;
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
  likes?: string[];
  isLiked?: boolean;
  //comments?: CommentsEntity[];
  //commentBody?: string[];
}
