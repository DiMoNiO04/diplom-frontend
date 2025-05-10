import * as yup from 'yup';

import { passwordConfirmationSchema, passwordSchema, requiredStringSchema } from './common';

interface IFormChangePasswordData {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
}

const schemaChangePassword: yup.ObjectSchema<IFormChangePasswordData> = yup
  .object({
    currentPassword: requiredStringSchema,
    password: passwordSchema,
    passwordConfirmation: passwordConfirmationSchema,
  })
  .required();

export { schemaChangePassword };
export type { IFormChangePasswordData };
