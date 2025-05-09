'use server';

import { cookies, headers } from 'next/headers';

import { IUserInfo } from '@/stores/user';
import { protectedPaths } from '@/utils/consts';
import { getFailedMsg } from '@/utils/functions';
import { EUrls } from '@/utils/urls';
import { IFormLoginData, IFormPasswordForgotData, IFormPasswordNewData } from '@/utils/validations';

import { apiFetchPost } from './api';
import {
  API_FORGOT_PASSWORD,
  API_LOGIN,
  API_REGISTER_USER,
  API_RESET_PASSWORD,
  EMsgActions,
  IApiResultReturn,
} from './utils';

interface ILoginUserReturn extends IApiResultReturn {
  user?: IUserInfo;
}

interface IFormRegDataApi {
  username: string;
  email: string;
  password: string;
}

const apiAuthForgotPassword = (data: IFormPasswordForgotData): Promise<IApiResultReturn> =>
  apiFetchPost(API_FORGOT_PASSWORD, data, EMsgActions.SUCCESS_FORGOT_PASSWORD);

const apiAuthLoginUser = async (data: IFormLoginData): Promise<ILoginUserReturn> => {
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

const apiAuthLogoutUser = async () => {
  try {
    const cookiesStore = await cookies();
    cookiesStore.delete('jwt');

    const referer = (await headers()).get('referer') || '';
    const isProtectedRoute = protectedPaths.some((path) => referer.includes(path));

    return {
      isSuccess: true,
      message: EMsgActions.SUCCESS_EXIT_ACCOUNT,
      redirectTo: isProtectedRoute ? EUrls.HOME : null,
    };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return {
      isSuccess: false,
      message: EMsgActions.FAILED_FETCH_TRY_AGAIN,
      redirectTo: null,
    };
  }
};

const apiAuthRegisterUser = (data: IFormRegDataApi): Promise<IApiResultReturn> =>
  apiFetchPost<IFormRegDataApi>(API_REGISTER_USER, data, EMsgActions.SUCCESS_REG);

const apiAuthResetPassword = (data: IFormPasswordNewData): Promise<IApiResultReturn> =>
  apiFetchPost(API_RESET_PASSWORD, data, EMsgActions.SUCCESS_CHANGE_PASSWORD);

export { apiAuthForgotPassword, apiAuthLoginUser, apiAuthLogoutUser, apiAuthRegisterUser, apiAuthResetPassword };
