import * as yup from 'yup';
import { ObjectSchema } from 'yup';

import { EValidateMessages } from './messages';

interface IFormLoginData {
  email: string;
  password: string;
}

const schemaLogin: ObjectSchema<IFormLoginData> = yup
  .object({
    email: yup
      .string()
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, EValidateMessages.INCORRECT_EMAIL)
      .required(EValidateMessages.REQUIRED_FIELD),
    password: yup
      .string()
      .min(8, EValidateMessages.PASSWORD_MIN_LENGTH)
      .matches(/[a-z]/, EValidateMessages.PASSWORD_LOWERCASE)
      .matches(/[A-Z]/, EValidateMessages.PASSWORD_UPPERCASE)
      .matches(/\d/, EValidateMessages.PASSWORD_DIGIT)
      .required(EValidateMessages.REQUIRED_FIELD),
  })
  .required();

export { schemaLogin };
export type { IFormLoginData };
