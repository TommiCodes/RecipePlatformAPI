import { CommentsEntity } from 'src/comments/model/comments.entity';
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
  comment: CommentsEntity[];
}
