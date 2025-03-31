import * as yup from 'yup';

import { EValidateMessages } from './messages';

interface IFormRegData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
}

const schemaReg: yup.ObjectSchema<IFormRegData> = yup
  .object({
    firstName: yup.string().required(EValidateMessages.REQUIRED_FIELD),
    lastName: yup.string().required(EValidateMessages.REQUIRED_FIELD),
    email: yup.string().email(EValidateMessages.INCORRECT_EMAIL).required(EValidateMessages.REQUIRED_FIELD),
    agree: yup.boolean().oneOf([true], EValidateMessages.AGREE_CHECKBOX).required(EValidateMessages.AGREE_CHECKBOX),
    password: yup
      .string()
      .min(8, EValidateMessages.PASSWORD_MIN_LENGTH)
      .matches(/[A-Z]/, EValidateMessages.PASSWORD_UPPERCASE)
      .matches(/[a-z]/, EValidateMessages.PASSWORD_LOWERCASE)
      .matches(/[0-9]/, EValidateMessages.PASSWORD_NUMBER)
      .required(EValidateMessages.REQUIRED_FIELD),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), undefined], EValidateMessages.PASSWORDS_MUST_MATCH)
      .required(EValidateMessages.REQUIRED_FIELD),
  })
  .required();

export { schemaReg };
export type { IFormRegData };
