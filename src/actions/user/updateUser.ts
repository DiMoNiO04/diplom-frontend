import { IUserInfo } from '@/stores/user';

import { apiRequest } from '../api';
import { API_USERS } from '../utils';

export const apiUpdateUser = async (idUser: string, data: IUserInfo) =>
  apiRequest<IUserInfo>(`${API_USERS}${idUser}`, 'PUT', data);
