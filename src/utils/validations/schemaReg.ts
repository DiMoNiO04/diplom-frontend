import * as yup from 'yup';

import {
  booleanSchema,
  passwordConfirmationSchema,
  passwordSchema,
  requiredEmailStringSchema,
  requiredStringSchema,
} from './common';

interface IFormRegData {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  agree: boolean;
}

const schemaReg: yup.ObjectSchema<IFormRegData> = yup
  .object({
    username: requiredStringSchema,
    email: requiredEmailStringSchema,
    password: passwordSchema,
    passwordConfirmation: passwordConfirmationSchema,
    agree: booleanSchema,
  })
  .required();

export { schemaReg };
export type { IFormRegData };
