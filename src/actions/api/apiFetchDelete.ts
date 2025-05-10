'use server';

import { cookies } from 'next/headers';

import { BEARER_AUTH, COOKIES_JWT } from '@/utils/consts';
import { IApiFetchReturn } from '@/utils/interfaces';

import { EApiMethods, EMsgActions } from '../utils';

export const apiFetchDelete = async (url: string, successMessage: string): Promise<IApiFetchReturn> => {
  const jwtToken = (await cookies()).get(COOKIES_JWT)?.value;

  if (!jwtToken) {
    return { isSuccess: false, message: EMsgActions.FAILED_FIND_TOKEN };
  }

  try {
    const res = await fetch(url, {
      method: EApiMethods.DELETE,
      headers: {
        Authorization: `${BEARER_AUTH} ${jwtToken}`,
      },
    });

    if (!res.ok) {
      const result = await res.json();
      const message = result?.error?.message || EMsgActions.FAILED_FETCH;
      return { isSuccess: false, message };
    }

    return { isSuccess: true, message: successMessage };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
};
