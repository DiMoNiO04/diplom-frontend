import * as yup from 'yup';

import { requiredStringSchema } from './common';

interface IFormProfileData {
  firstName: string;
  lastName: string;
}

const schemaProfile: yup.ObjectSchema<IFormProfileData> = yup
  .object({
    firstName: requiredStringSchema,
    lastName: requiredStringSchema,
  })
  .required();

export { schemaProfile };
export type { IFormProfileData };
