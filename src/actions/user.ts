'use server';

import { cookies } from 'next/headers';

import { IUserInfo } from '@/stores/user';
import { getFailedMsg } from '@/utils/functions';
import { IUser } from '@/utils/interfaces';
import { IFormChangePasswordData } from '@/utils/validations';

import { apiFetch, apiFetchDelete, apiFetchGetWithToken, apiFetchPostWithToken } from './api';
import { apiFetchPut } from './api/apiFetchPut';
import {
  API_CHANGE_PASSWORD,
  API_USER_INFO,
  API_USERS,
  API_USERS_TEAM,
  EMsgActions,
  IApiResultReturn,
  REVALIDATE_DAY_TIME,
} from './utils';

export interface IApiUserSubscribe {
  email: string;
  isSubscribe: boolean;
}

const apiUserChangePassword = async (data: IFormChangePasswordData): Promise<IApiResultReturn> => {
  const result = await apiFetchPostWithToken(API_CHANGE_PASSWORD, data, EMsgActions.SUCCESS_CHANGE_PASSWORD);

  if (!result.isSuccess) {
    return {
      isSuccess: false,
      message: getFailedMsg(result.message),
    };
  }

  return result;
};

const apiUserDelete = (idUser: number) => apiFetchDelete(`${API_USERS}${idUser}`, EMsgActions.SUCCESS_DELETE_ACCOUNT);

const apiGetUserInfo = (): Promise<IUserInfo | null> => apiFetchGetWithToken(API_USER_INFO);

const apiGetUsersTeam = (): Promise<IUser[]> =>
  apiFetch<IUser[]>(API_USERS_TEAM, {
    next: { revalidate: REVALIDATE_DAY_TIME },
  });

const apiUserSubscribe = async (idUser: number, data: IApiUserSubscribe) => {
  const jwtToken = (await cookies()).get('jwt')?.value;

  const { email, isSubscribe } = data;

  if (!jwtToken) {
    return { isSuccess: false, message: EMsgActions.FAILED_FIND_TOKEN };
  }

  try {
    const res = await fetch(`${API_USERS}${idUser}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const result = await res.json();
      const message = result?.error?.message || EMsgActions.FAILED_FETCH;
      return { isSuccess: false, message };
    }

    return {
      isSuccess: true,
      message: isSubscribe
        ? `Подписка на еженедельную рассылку оформлена на почту: ${email}!`
        : 'Вы отписались от еженедельной рассылки!',
    };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
};

const apiUserUpdate = (idUser: number, data: IUserInfo) =>
  apiFetchPut(`${API_USERS}${idUser}`, data, EMsgActions.SUCCESS_UPDATE_USER);

export { apiGetUserInfo, apiGetUsersTeam, apiUserChangePassword, apiUserDelete, apiUserSubscribe, apiUserUpdate };
