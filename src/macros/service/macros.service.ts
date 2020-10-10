import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();
@Injectable()
export class MacrosService {
  async getAllNutrients(ingr: string) {
    const headersRequest = {
      'x-rapidapi-host': `${process.env.NUTRI_HOST}`,
      'x-rapidapi-key': `${process.env.NUTRI_KEY}`,
      useQueryString: true,
    };
    const result = await axios.get(
      'https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data',
      { params: { ingr: ingr.toString() }, headers: headersRequest },
    );
    return result.data;
  }

  /*
  async createMacros(recipe: RecipeEntity, id: number): Promise<MacroEntry> {
    const findRecipe = this.recipeService.findOne(id).toPromise();

    const result = (await findRecipe).ingr.map(item =>
      this.getAllNutrients(item),
    );

    console.log(result);
  }*/

  /*async insertMacrosFromOneIngredient(
    ingr: string,
    name: string,
    totalWeight: number,
    dietLabels: string[],
    calorieQuantity: number,
    proteinQuantity: number,
    carbQuantity: number,
    fatQuantity: number,
    sugarQuantity: number,
  ) {
    const nutrientList = await this.getAllNutrients(ingr);
    this.macroRepository.save({
      totalWeight: nutrientList.totalWeight,
      dietLabels: nutrientList.dietLabels,
      calorieQuantity: nutrientList.calories,
      proteinQuantity: nutrientList.totalNutrients.PROCNT.quantity,
      carbQuantity: nutrientList.totalNutrients.CHOCDF.quantity,
      fatQuantity: nutrientList.totalNutrients.FAT.quantity,
      sugarQuantity: nutrientList.totalNutrients.SUGAR.quantity,
    });
    /*const newMacroList = new this.MacroEntity({
      name: ingr,
      totalWeight: nutrientList.totalWeight,
      dietLabels: nutrientList.dietLabels,
      calorieQuantity: nutrientList.calories,
      proteinQuantity: nutrientList.totalNutrients.PROCNT.quantity,
      carbQuantity: nutrientList.totalNutrients.CHOCDF.quantity,
      fatQuantity: nutrientList.totalNutrients.FAT.quantity,
      sugarQuantity: nutrientList.totalNutrients.SUGAR.quantity,
    });

    //const result = await newMacroList.save();
    //return result.id as string;
  }*/
}
