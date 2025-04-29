import { IUserInfo } from '@/stores/user';

import { apiRequest } from '../api';
import { API_USER_INFO } from '../utils';

export const apiGetUserInfo = async (): Promise<IUserInfo | null> => {
  const result = await apiRequest<IUserInfo>(API_USER_INFO, 'GET', undefined, false);
  return result.isSuccess ? result.data : null;
};
