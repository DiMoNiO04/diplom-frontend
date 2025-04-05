import * as yup from 'yup';
import { ObjectSchema } from 'yup';

import { emailSchema } from './common';

interface IFormPasswordForgotData {
  email: string;
}

const schemaPasswordForgot: ObjectSchema<IFormPasswordForgotData> = yup
  .object({
    email: emailSchema,
  })
  .required();

export { schemaPasswordForgot };
export type { IFormPasswordForgotData };
