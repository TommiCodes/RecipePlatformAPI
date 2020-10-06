import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MacroEntity } from '../models/macros.entity';
import axios from 'axios';
import { RecipeEntity } from 'src/recipe/model/recipe-entry.entity';
import { MacroEntry } from '../models/macros.interface';
@Injectable()
export class MacrosService {
  constructor(
    @InjectRepository(MacroEntity)
    private readonly macroRepository: Repository<MacroEntity>,
  ) {}

  async getAllNutrients(ingr: string) {
    const headersRequest = {
      'x-rapidapi-host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
      'x-rapidapi-key': '5664b75c9fmsh66ac8e054422eb9p1600b8jsn878d097e8d2a',
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
