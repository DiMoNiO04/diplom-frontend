'use server';

import { cookies } from 'next/headers';

import { IFormLoginData } from '@/utils/validations';

import { API_LOGIN, EMsgActions, IAuthUserReturn } from '../utils';

interface ILoginUserReturn extends IAuthUserReturn {
  user?: unknown;
}

const getFailedMsg = (message: string): string => {
  if (message === 'Invalid identifier or password') {
    message = EMsgActions.FAILED_LOGIN;
  } else if (message === 'Your account email is not confirmed') {
    message = EMsgActions.NO_CONFIRM_ACC;
  } else if (message === 'Your account has been blocked by an administrator') {
    message = EMsgActions.BLOCKED_ACC;
  }

  return message;
};

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
