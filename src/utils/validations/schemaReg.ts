import * as yup from 'yup';

import {
  booleanSchema,
  confirmPasswordSchema,
  passwordSchema,
  requiredEmailStringSchema,
  requiredStringSchema,
} from './common';

interface IFormRegData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
}

const schemaReg: yup.ObjectSchema<IFormRegData> = yup
  .object({
    firstName: requiredStringSchema,
    lastName: requiredStringSchema,
    email: requiredEmailStringSchema,
    agree: booleanSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
  })
  .required();

export { schemaReg };
export type { IFormRegData };
