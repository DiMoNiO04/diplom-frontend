import * as yup from 'yup';

import { EValidateMessages } from './messages';

interface IFormProfileData {
  firstName: string;
  lastName: string;
}

const schemaProfile: yup.ObjectSchema<IFormProfileData> = yup
  .object({
    firstName: yup.string().required(EValidateMessages.REQUIRED_FIELD),
    lastName: yup.string().required(EValidateMessages.REQUIRED_FIELD),
  })
  .required();

export { schemaProfile };
export type { IFormProfileData };
