'use server';

import { CONTENT_TYPE } from '@/utils/consts';
import { getFailedMsg } from '@/utils/functions';

import { IApiResultReturn } from '../interfaces';
import { EApiMethods, EMsgActions } from '../utils';

export const apiFetchPost = async <T>(url: string, data: T, successMessage: string): Promise<IApiResultReturn> => {
  try {
    const res = await fetch(url, {
      method: EApiMethods.POST,
      headers: { 'Content-Type': CONTENT_TYPE },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      const message = getFailedMsg(result?.error?.message) || EMsgActions.FAILED_FETCH;
      return { isSuccess: false, message };
    }

    return {
      isSuccess: true,
      message: successMessage,
    };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
};
