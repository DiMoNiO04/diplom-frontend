import { IFormPasswordNewData } from '@/utils/validations';

import { apiPost } from '../api';
import { API_RESET_PASSWORD } from '../utils';

export const apiResetPassword = (data: IFormPasswordNewData) => apiPost<IFormPasswordNewData>(API_RESET_PASSWORD, data);
