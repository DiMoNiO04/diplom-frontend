import * as yup from 'yup';

import { requiredImgsRecipeSchema, requiredPositiveIntNumSchema, requiredStringSchema } from './common';

interface IFormRecipeData {
  name: string;
  description: string;
  ingredients: string;
  instructions: string;
  cookingTime: number;
  calories: number;
  img: string[];
  category: string;
}

const schemaRecipe = yup.object().shape({
  name: requiredStringSchema,
  description: requiredStringSchema,
  cookingTime: requiredPositiveIntNumSchema,
  calories: requiredPositiveIntNumSchema,
  img: requiredImgsRecipeSchema,
  ingredients: requiredStringSchema,
  instructions: requiredStringSchema,
  category: requiredStringSchema,
});

export { schemaRecipe };
export type { IFormRecipeData };
