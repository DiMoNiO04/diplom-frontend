import * as yup from 'yup';
import { ObjectSchema } from 'yup';

import { EValidateMessages } from './messages';

interface IFormPasswordForgotData {
  email: string;
}

const schemaPasswordForgot: ObjectSchema<IFormPasswordForgotData> = yup
  .object({
    email: yup
      .string()
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, EValidateMessages.INCORRECT_EMAIL)
      .required(EValidateMessages.REQUIRED_FIELD),
  })
  .required();

export { schemaPasswordForgot };
export type { IFormPasswordForgotData };
