import * as yup from 'yup';

interface IFormProfileData {
  firstName?: string | null;
  lastName?: string | null;
  patronymic?: string | null;
}

const schemaProfile: yup.ObjectSchema<IFormProfileData> = yup
  .object({
    firstName: yup.string().nullable().notRequired(),
    lastName: yup.string().nullable().notRequired(),
    patronymic: yup.string().nullable().notRequired(),
  })
  .defined();

export { schemaProfile };
export type { IFormProfileData };
