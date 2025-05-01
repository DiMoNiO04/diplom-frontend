import * as yup from 'yup';

import { requiredPositiveIntNumSchema, requiredStringSchema } from './common';

interface IFormRecipeData {
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  cookingTime: number;
  calories: number;
  // img: string[];
  categories: string[];
  collections: string[];
}

const schemaRecipe = yup.object().shape({
  title: requiredStringSchema,
  description: requiredStringSchema,
  cookingTime: requiredPositiveIntNumSchema,
  calories: requiredPositiveIntNumSchema,
  // img: requiredImgsRecipeSchema,
  ingredients: requiredStringSchema,
  instructions: requiredStringSchema,
  categories: yup
    .array()
    .of(yup.string().required())
    .min(1, 'Укажите хотя бы одну категорию')
    .required('Поле обязательно'),
  collections: yup
    .array()
    .of(yup.string().required())
    .min(1, 'Укажите хотя бы одну коллекцию')
    .required('Поле обязательно'),
});

export { schemaRecipe };
export type { IFormRecipeData };
