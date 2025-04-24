import * as yup from 'yup';

import { passwordConfirmationSchema, passwordSchema } from './common';

interface IFormPasswordNewData {
  password: string;
  passwordConfirmation: string;
}

const schemaPasswordNew: yup.ObjectSchema<IFormPasswordNewData> = yup
  .object({
    password: passwordSchema,
    passwordConfirmation: passwordConfirmationSchema,
  })
  .required();

export { schemaPasswordNew };
export type { IFormPasswordNewData };
