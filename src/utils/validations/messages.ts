export const EValidateMessages = {
  REQUIRED_FIELD: 'Заполните поле',
  INCORRECT_EMAIL: 'Некорректный email',
  PASSWORD_MIN_LENGTH: 'Пароль должен содержать минимум 8 символов',
  PASSWORD_LOWERCASE: 'Пароль должен содержать хотя бы одну строчную букву',
  PASSWORD_UPPERCASE: 'Пароль должен содержать хотя бы одну заглавную букву',
  PASSWORD_DIGIT: 'Пароль должен содержать хотя бы одну цифру',
};

export type EValidateMessages = (typeof EValidateMessages)[keyof typeof EValidateMessages];
