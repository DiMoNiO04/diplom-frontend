import * as yup from 'yup';

import { confirmPasswordSchema, passwordSchema, requiredStringSchema } from './common';

interface IFormChangePasswordData {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

const schemaChangePassword: yup.ObjectSchema<IFormChangePasswordData> = yup
  .object({
    oldPassword: requiredStringSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
  })
  .required();

export { schemaChangePassword };
export type { IFormChangePasswordData };
