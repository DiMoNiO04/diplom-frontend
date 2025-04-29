'use server';

import { cookies } from 'next/headers';

import { getFailedMsg } from '@/utils/functions';
import { IFormChangePasswordData } from '@/utils/validations';

import { API_CHANGE_PASSWORD, EMsgActions, IApiResultReturn } from '../utils';

export async function apiChangePassword(data: IFormChangePasswordData): Promise<IApiResultReturn> {
  const cookieStore = await cookies();
  const jwt = cookieStore.get('jwt')?.value;

  if (!jwt) {
    return { isSuccess: false, message: EMsgActions.FAILED_FIND_TOKEN };
  }

  try {
    const res = await fetch(API_CHANGE_PASSWORD, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      const message: string = getFailedMsg(result?.error?.message);

      return { isSuccess: false, message };
    }

    return {
      isSuccess: true,
      message: EMsgActions.SUCCESS_CHANGE_PASSWORD,
    };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
}
