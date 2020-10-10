import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from 'src/user/models/user.entity';
import { RecipeEntity } from 'src/recipe/model/recipe-entry.entity';

@Entity('comments_entry')
export class CommentsEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column()
  comment: string;

  @ManyToOne(() => UserEntity, user => user.commentEntries)
  author: UserEntity;

  @ManyToOne(() => RecipeEntity, recipe => recipe.comments)  
  recipe: RecipeEntity;
}
