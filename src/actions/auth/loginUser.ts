'use server';

import { cookies } from 'next/headers';

import { IUserInfo } from '@/stores/user';
import { getFailedMsg } from '@/utils/functions';
import { IFormLoginData } from '@/utils/validations';

import { API_LOGIN, EMsgActions, IApiResultReturn } from '../utils';

interface ILoginUserReturn extends IApiResultReturn {
  user?: IUserInfo;
}

export const apiLoginUser = async (data: IFormLoginData): Promise<ILoginUserReturn> => {
  try {
    const res = await fetch(API_LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      const message: string = getFailedMsg(result?.error?.message);

      return { isSuccess: false, message };
    }

    (await cookies()).set('jwt', result.jwt, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    return {
      isSuccess: true,
      message: EMsgActions.SUCCESS_LOGIN,
      user: result.user,
    };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
};
