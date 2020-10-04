import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  ManyToOne,
  JoinColumn,
  OneToMany,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { UserEntity } from 'src/user/models/user.entity';
import { CommentsEntity } from 'src/comments/model/comments.entity';

@Entity('recipe_entry')
export class RecipeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column('text', { array: true, nullable: true })
  ingr: string[];

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  body: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }

  @Column({ nullable: true })
  headerImage: string;

  @Column({ nullable: true })
  publishedDate: Date;

  @Column({ nullable: true })
  isPublished: boolean;

  @Column()
  user_id: number;

  @ManyToOne(
    type => UserEntity,
    user => user.recipeEntries,
  )
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  author: UserEntity;

  @Column({ default: 0 })
  totalWeight: number;

  @Column('text', { array: true, default: '{}' })
  dietLabels: string[];

  @Column({ default: 0 })
  calorieQuantity: number;

  @Column({ default: 0 })
  proteinQuantity: number;

  @Column({ default: 0 })
  carbQuantity: number;

  @Column({ default: 0 })
  fatQuantity: number;

  @Column({ default: 0 })
  sugarQuantity: number;

  @Column('text', { array: true, nullable: true })
  likes: string[];

  @Column({ default: false, nullable: true })
  isLiked: boolean;

  @OneToMany(
    type => CommentsEntity,
    comments => comments.comment,
  )
  comment: CommentsEntity[];
}
