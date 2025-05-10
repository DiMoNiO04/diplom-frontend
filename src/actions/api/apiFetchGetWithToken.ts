'use server';

import { cookies } from 'next/headers';

import { BEARER_AUTH, COOKIES_JWT } from '@/utils/consts';

import { EMsgActions } from '../utils';

export const apiFetchGetWithToken = async (url: string) => {
  const jwtToken = (await cookies()).get(COOKIES_JWT)?.value;

  if (!jwtToken) {
    return { isSuccess: false, message: EMsgActions.FAILED_FIND_TOKEN };
  }

  try {
    const res = await fetch(url, {
      cache: 'no-cache',
      headers: {
        Authorization: `${BEARER_AUTH} ${jwtToken}`,
      },
    });

    const result = await res.json();

    if (!res.ok) {
      const message = result?.error?.message || EMsgActions.FAILED_FETCH;
      return { isSuccess: false, message };
    }

    return result;
  } catch (error) {
    console.error(error);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
};
