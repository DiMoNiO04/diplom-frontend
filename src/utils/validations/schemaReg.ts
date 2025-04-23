import * as yup from 'yup';

import {
  booleanSchema,
  confirmPasswordSchema,
  passwordSchema,
  requiredEmailStringSchema,
  requiredStringSchema,
} from './common';

interface IFormRegData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
}

const schemaReg: yup.ObjectSchema<IFormRegData> = yup
  .object({
    username: requiredStringSchema,
    email: requiredEmailStringSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
    agree: booleanSchema,
  })
  .required();

export { schemaReg };
export type { IFormRegData };
