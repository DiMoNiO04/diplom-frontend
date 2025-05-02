import * as yup from 'yup';

export const EValidateMessages = {
  REQUIRED_FIELD: 'Заполните поле',
  INCORRECT_EMAIL: 'Некорректный email',
  PASSWORD_MIN_LENGTH: 'Пароль должен содержать минимум 8 символов',
  PASSWORD_LOWERCASE: 'Пароль должен содержать хотя бы одну строчную букву',
  PASSWORD_UPPERCASE: 'Пароль должен содержать хотя бы одну заглавную букву',
  PASSWORD_NUMBER: 'Пароль должен содержать хотя бы одну цифру',
  PASSWORDS_MUST_MATCH: 'Пароли должны совпадать',
  AGREE_CHECKBOX: 'Вы должны согласиться с условиями обработки данных',
  SHORT_DESC_MIN: 'Описание должно содержать минимум 50 символов',
  SHORT_DESC_MAX: 'Описание должно содержать не более 160 символов',
  CATEGORY_MIN: 'Укажите хотя бы одну категорию',
};

export type EValidateMessages = (typeof EValidateMessages)[keyof typeof EValidateMessages];

const MIN_LENGTH_PASSWORD: number = 8;

const passwordSchema = yup
  .string()
  .min(MIN_LENGTH_PASSWORD, EValidateMessages.PASSWORD_MIN_LENGTH)
  .matches(/[A-Z]/, EValidateMessages.PASSWORD_UPPERCASE)
  .matches(/[a-z]/, EValidateMessages.PASSWORD_LOWERCASE)
  .matches(/[0-9]/, EValidateMessages.PASSWORD_NUMBER)
  .required(EValidateMessages.REQUIRED_FIELD);

const passwordConfirmationSchema = yup
  .string()
  .oneOf([yup.ref('password'), undefined], EValidateMessages.PASSWORDS_MUST_MATCH)
  .required(EValidateMessages.REQUIRED_FIELD);

const emailSchema = yup
  .string()
  .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, EValidateMessages.INCORRECT_EMAIL)
  .required(EValidateMessages.REQUIRED_FIELD);

const requiredEmailStringSchema = yup
  .string()
  .email(EValidateMessages.INCORRECT_EMAIL)
  .required(EValidateMessages.REQUIRED_FIELD);

const requiredStringSchema = yup.string().required(EValidateMessages.REQUIRED_FIELD);

const requiredPositiveIntNumSchema = yup.number().required(EValidateMessages.REQUIRED_FIELD).positive().integer();

const booleanSchema = yup
  .boolean()
  .oneOf([true], EValidateMessages.AGREE_CHECKBOX)
  .required(EValidateMessages.AGREE_CHECKBOX);

const requiredImgsRecipeSchema = yup
  .array()
  .of(yup.string().required(EValidateMessages.REQUIRED_FIELD))
  .min(1, EValidateMessages.REQUIRED_FIELD)
  .default([]);

const requiredShortDescription = yup
  .string()
  .min(50, EValidateMessages.SHORT_DESC_MIN)
  .max(160, EValidateMessages.SHORT_DESC_MAX)
  .required(EValidateMessages.REQUIRED_FIELD);

const requiredCategory = yup
  .array()
  .of(yup.string().required())
  .min(1, EValidateMessages.CATEGORY_MIN)
  .required(EValidateMessages.REQUIRED_FIELD);

export {
  booleanSchema,
  emailSchema,
  MIN_LENGTH_PASSWORD,
  passwordConfirmationSchema,
  passwordSchema,
  requiredCategory,
  requiredEmailStringSchema,
  requiredImgsRecipeSchema,
  requiredPositiveIntNumSchema,
  requiredShortDescription,
  requiredStringSchema,
};
