import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import { UserRole } from './user.interface';
import { RecipeEntity } from 'src/recipe/model/recipe-entry.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Column({ nullable: true })
  profileImage: string;

  @Column({ default: false, nullable: true })
  favourite: boolean;

  @OneToMany(
    type => RecipeEntity,
    recipeEntryEntity => recipeEntryEntity.author,
  )
  recipeEntries: RecipeEntity[];

  @BeforeInsert()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
  }
}
