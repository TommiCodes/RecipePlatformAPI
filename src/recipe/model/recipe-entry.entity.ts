import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { UserEntity } from 'src/user/models/user.entity';
import { MacroEntity } from 'src/macros/models/macros.entity';
import { CommentsEntity } from 'src/comments/model/comments.entity';

@Entity('recipe_entry')
export class RecipeEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

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

  @ManyToOne(() => UserEntity, user => user.recipeEntries)
  author: UserEntity;

  @Column('int', { array: true, nullable: true, default: '{}' })
  likes: number[];

  @Column({ default: false, nullable: true })
  isLiked: boolean;

  @Column('text', { array: true, nullable: true, default: '{}' })
  ingr: string[];
  
  @OneToMany(type => CommentsEntity, comment => comment.recipe)
  comments: CommentsEntity[];

  
  

  //Macro table TODO LATER
  @ManyToMany(() => MacroEntity)
  @JoinTable()
  macros: MacroEntity[];

  //delete LATER
  @Column({ default: 0, nullable: true, type: 'real' })
  totalWeight: string;

  @Column('text', { array: true, default: '{}', nullable: true })
  dietLabels: string[];

  @Column({ default: 0, nullable: true, type: 'real' })
  protein: string;

  @Column({ default: 0, nullable: true, type: 'real' })
  carbs: string;

  @Column({ default: 0, nullable: true, type: 'real' })
  fats: string;

  @Column({ default: 0, nullable: true, type: 'real' })
  sugar: string;

  @Column({ default: 0, nullable: true, type: 'real' })
  calories: string;

  @Column({ default: 0, nullable: true, type: 'real' })
  cholesterol: string;

  @Column({ default: 0, nullable: true, type: 'real' })
  water: string;
}
