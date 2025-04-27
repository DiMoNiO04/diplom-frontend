'use server';

import { cookies } from 'next/headers';

import { IUserInfo } from '@/stores/user';

import { API_USERS, EMsgActions } from '../utils';

export async function apiUpdateUser(idUser: string, data: IUserInfo) {
  const cookieStore = await cookies();
  const jwt = cookieStore.get('jwt')?.value;

  if (!jwt) {
    return { isSuccess: false, message: EMsgActions.FAILED_FIND_TOKEN };
  }

  try {
    const res = await fetch(`${API_USERS}${idUser}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const result = await res.json();
      const message = result?.error?.message || EMsgActions.FAILED_FETCH;
      return { isSuccess: false, message };
    }

    return { isSuccess: true, message: EMsgActions.SUCCESS_UPDATE_USER };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
}
