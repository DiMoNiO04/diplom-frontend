import { IFormChangePasswordData } from '@/utils/validations';

import { apiRequest } from '../api';
import { API_CHANGE_PASSWORD, IApiResultReturn } from '../utils';

export const apiChangePassword = async (data: IFormChangePasswordData): Promise<IApiResultReturn> =>
  apiRequest<IFormChangePasswordData>(API_CHANGE_PASSWORD, 'POST', data);
