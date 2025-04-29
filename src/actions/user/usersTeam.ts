import { IUser } from '@/utils/interfaces';

import { apiFetch } from '../api';
import { API_USERS_TEAM, REVALIDATE_DAY_TIME } from '../utils';

export const apiGetUsersTeam = (): Promise<IUser[]> =>
  apiFetch<IUser[]>(API_USERS_TEAM, {
    next: { revalidate: REVALIDATE_DAY_TIME },
  });
