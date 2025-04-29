import { apiRequest } from '../api';
import { API_USERS } from '../utils';

export const apiDeleteUser = async (idUser: string) => apiRequest<void>(`${API_USERS}${idUser}`, 'DELETE');
