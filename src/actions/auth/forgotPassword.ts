import { IFormPasswordForgotData } from '@/utils/validations';

import { apiPost } from '../api';
import { API_FORGOT_PASSWORD } from '../utils';

export const apiForgotPassword = (data: IFormPasswordForgotData) =>
  apiPost<IFormPasswordForgotData>(API_FORGOT_PASSWORD, data);
