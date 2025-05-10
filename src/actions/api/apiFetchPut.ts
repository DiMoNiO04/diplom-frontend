'use server';

import { cookies } from 'next/headers';

import { BEARER_AUTH, CONTENT_TYPE, COOKIES_JWT } from '@/utils/consts';

import { IApiResultReturn } from '../interfaces';
import { EApiMethods, EMsgActions } from '../utils';

export const apiFetchPut = async <T>(
  url: string,
  data: T,
  successMessage: string | ((data: T) => string)
): Promise<IApiResultReturn> => {
  const jwtToken = (await cookies()).get(COOKIES_JWT)?.value;

  if (!jwtToken) {
    return { isSuccess: false, message: EMsgActions.FAILED_FIND_TOKEN };
  }

  try {
    const res = await fetch(url, {
      method: EApiMethods.PUT,
      headers: {
        'Content-Type': CONTENT_TYPE,
        Authorization: `${BEARER_AUTH} ${jwtToken}`,
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
