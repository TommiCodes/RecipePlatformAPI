export interface Image {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
  ingr?: string;
  totalWeight?: string;
  dietLabels?: string;
  calorieQuantity?: string;
  proteinQuantity?: Date;
  carbQuantity?: Date;
  fatQuantity?: number;
  sugarQuantity?: string;
}
