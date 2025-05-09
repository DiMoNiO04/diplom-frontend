'use server';

import { cookies } from 'next/headers';

import { EMsgActions, IApiResultReturn } from '../utils';

export const apiFetchPut = async <T>(
  url: string,
  data: T,
  successMessage: string | ((data: T) => string)
): Promise<IApiResultReturn> => {
  const jwtToken = (await cookies()).get('jwt')?.value;

  if (!jwtToken) {
    return { isSuccess: false, message: EMsgActions.FAILED_FIND_TOKEN };
  }

  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      const message = result?.error?.message || EMsgActions.FAILED_FETCH;
      return { isSuccess: false, message };
    }

    const message = typeof successMessage === 'function' ? successMessage(data) : successMessage;

    return { isSuccess: true, message };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
};
