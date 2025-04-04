import * as yup from 'yup';

import { EValidateMessages } from './messages';

interface IFormRecipeData {
  name: string;
  description: string;
  ingredients: string;
  instructions: string;
  cookingTime: number;
  calories: number;
  img: File[];
  category: string;
}

const schemaRecipe = yup.object().shape({
  name: yup.string().required(EValidateMessages.REQUIRED_FIELD),
  description: yup.string().required(EValidateMessages.REQUIRED_FIELD),
  cookingTime: yup.number().required(EValidateMessages.REQUIRED_FIELD).positive().integer(),
  calories: yup.number().required(EValidateMessages.REQUIRED_FIELD).positive().integer(),
  img: yup
    .array()
    .of(yup.mixed<File>().required(EValidateMessages.REQUIRED_FIELD))
    .min(1, EValidateMessages.REQUIRED_FIELD)
    .default([]),
  ingredients: yup.string().required(EValidateMessages.REQUIRED_FIELD),
  instructions: yup.string().required(EValidateMessages.REQUIRED_FIELD),
  category: yup.string().required(EValidateMessages.REQUIRED_FIELD),
});

export { schemaRecipe };
export type { IFormRecipeData };
