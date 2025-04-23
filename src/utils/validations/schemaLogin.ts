import * as yup from 'yup';
import { ObjectSchema } from 'yup';

import { requiredStringSchema } from './common';

interface IFormLoginData {
  identifier: string;
  password: string;
}

const schemaLogin: ObjectSchema<IFormLoginData> = yup
  .object({
    identifier: requiredStringSchema,
    password: requiredStringSchema,
  })
  .required();

export { schemaLogin };
export type { IFormLoginData };
