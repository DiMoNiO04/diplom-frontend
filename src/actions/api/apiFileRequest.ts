'use server';

import { EMsgActions } from '../utils';
import { getJwtToken } from './getJwtToken';

export const apiFileRequest = async (url: string, method: 'POST' | 'DELETE', body?: FormData) => {
  const jwt = await getJwtToken();

  if (!jwt) {
    return { isSuccess: false, message: EMsgActions.FAILED_FIND_TOKEN };
  }

  try {
    const res = await fetch(url, {
      method,
      headers: {
        ...(jwt ? { Authorization: `Bearer ${jwt}` } : {}),
      },
      body,
    });

    if (!res.ok) {
      const result = await res.json();
      const message = result?.error?.message || EMsgActions.FAILED_FETCH;
      return { isSuccess: false, message };
    }

    return { isSuccess: true, message: 'Success', data: await res.json() };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
};
