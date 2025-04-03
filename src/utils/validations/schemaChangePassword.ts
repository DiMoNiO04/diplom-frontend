import * as yup from 'yup';

import { EValidateMessages } from './messages';

interface IFormChangePasswordData {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

const schemaChangePassword: yup.ObjectSchema<IFormChangePasswordData> = yup
  .object({
    oldPassword: yup.string().required(EValidateMessages.REQUIRED_FIELD),
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

export { schemaChangePassword };
export type { IFormChangePasswordData };
