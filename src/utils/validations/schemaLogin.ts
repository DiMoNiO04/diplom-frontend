import * as yup from 'yup';
import { ObjectSchema } from 'yup';

import { emailSchema, requiredStringSchema } from './common';

interface IFormLoginData {
  email: string;
  password: string;
}

const schemaLogin: ObjectSchema<IFormLoginData> = yup
  .object({
    email: emailSchema,
    password: requiredStringSchema,
  })
  .required();

export { schemaLogin };
export type { IFormLoginData };
