'use server';

import { cookies } from 'next/headers';

import { API_USERS, EMsgActions } from '../utils';

export async function apiDeleteUser(idUser: string) {
  const cookieStore = await cookies();
  const jwt = cookieStore.get('jwt')?.value;

  if (!jwt) {
    return { isSuccess: false, message: EMsgActions.FAILED_FIND_TOKEN };
  }

  try {
    const res = await fetch(`${API_USERS}${idUser}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (!res.ok) {
      const result = await res.json();
      const message = result?.error?.message || EMsgActions.FAILED_FETCH;
      return { isSuccess: false, message };
    }

    return { isSuccess: true, message: EMsgActions.SUCCESS_DELETE_ACCOUNT };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
}
