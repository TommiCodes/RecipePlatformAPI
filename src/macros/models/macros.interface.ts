import { RecipeEntity } from 'src/recipe/model/recipe-entry.entity';

//import { CommentsEntity } from 'src/comments/model/comments.entity';
export interface MacroEntry {
  id?: number;
  totalWeight?: number;
  dietLabels?: string[];
  calorieQuantity?: number;
  proteinQuantity?: number;
  carbQuantity?: number;
  fatQuantity?: number;
  sugarQuantity?: number;
  waterQuantity?: number;
  macros?: RecipeEntity[];
  //comments?: CommentsEntity[];
  //commentBody?: string[];
}
