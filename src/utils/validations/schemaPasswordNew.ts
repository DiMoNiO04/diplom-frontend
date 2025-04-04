import * as yup from 'yup';

import { confirmPasswordSchema, passwordSchema } from './common';

interface IFormPasswordNewData {
  password: string;
  confirmPassword: string;
}

const schemaPasswordNew: yup.ObjectSchema<IFormPasswordNewData> = yup
  .object({
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
  })
  .required();

export { schemaPasswordNew };
export type { IFormPasswordNewData };
