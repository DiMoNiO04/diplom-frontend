'use server';

import { EMsgActions } from '../utils';
import { getJwtToken } from './getJwtToken';

export const apiRequest = async <T>(url: string, method: string, data?: T, tokenRequired: boolean = true) => {
  const jwt = tokenRequired ? await getJwtToken() : null;

  if (tokenRequired && !jwt) {
    return { isSuccess: false, message: EMsgActions.FAILED_FIND_TOKEN };
  }

  try {
    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(jwt ? { Authorization: `Bearer ${jwt}` } : {}),
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    const result = await res.json();

    if (!res.ok) {
      const message = result?.error?.message || EMsgActions.FAILED_FETCH;
      return { isSuccess: false, message };
    }

    return { isSuccess: true, message: result?.message || 'Success', data: result };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
};
