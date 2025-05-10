import * as yup from 'yup';

import { passwordConfirmationSchema, passwordSchema, requiredStringSchema } from './common';

interface IFormResetPasswordData {
  code: string;
  password: string;
  passwordConfirmation: string;
}

const schemaResetPassword: yup.ObjectSchema<IFormResetPasswordData> = yup
  .object({
    code: requiredStringSchema,
    password: passwordSchema,
    passwordConfirmation: passwordConfirmationSchema,
  })
  .required();

export { schemaResetPassword };
export type { IFormResetPasswordData };
