import { RecipeEntity } from 'src/recipe/model/recipe-entry.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('macro_entity')
export class MacroEntity {
  @PrimaryGeneratedColumn()
  id: number;

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

  // subject entity
  @ManyToMany(
    type => RecipeEntity,
    recipe => recipe.macros,
  )
  macros: RecipeEntity[];
}
