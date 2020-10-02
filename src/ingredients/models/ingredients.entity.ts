import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ingredients_entry')
export class IngredientsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  totalWeight: number;

  @Column('text', { array: true })
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
}
