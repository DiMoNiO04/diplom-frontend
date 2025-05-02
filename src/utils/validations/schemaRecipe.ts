import * as yup from 'yup';

import {
  requiredCategory,
  requiredImg,
  requiredPositiveIntNumSchema,
  requiredShortDescription,
  requiredStringSchema,
} from './common';

interface IFormRecipeData {
  title: string;
  shortDescription: string;
  description: string;
  ingredients: string;
  instructions: string;
  cookingTime: number;
  calories: number;
  categories: string[];
  img: string[];
}

const schemaRecipe = yup.object().shape({
  title: requiredStringSchema,
  description: requiredStringSchema,
  shortDescription: requiredShortDescription,
  cookingTime: requiredPositiveIntNumSchema,
  calories: requiredPositiveIntNumSchema,
  ingredients: requiredStringSchema,
  instructions: requiredStringSchema,
  categories: requiredCategory,
  img: requiredImg,
});

export { schemaRecipe };
export type { IFormRecipeData };
