'use server';

import { cookies, headers } from 'next/headers';

import { CONTENT_TYPE, COOKIES_JWT, protectedPaths } from '@/utils/consts';
import { getFailedMsg } from '@/utils/functions';
import { EUrls } from '@/utils/urls';
import { IFormLoginData, IFormPasswordForgotData, IFormPasswordNewData } from '@/utils/validations';

import { apiFetchPost } from './api';
import { IApiResultReturn, IFormRegDataApi, ILoginUserReturn } from './interfaces';
import {
  API_FORGOT_PASSWORD,
  API_LOGIN,
  API_REGISTER_USER,
  API_RESET_PASSWORD,
  EApiMethods,
  EMsgActions,
} from './utils';

const apiAuthForgotPassword = (data: IFormPasswordForgotData): Promise<IApiResultReturn> =>
  apiFetchPost(API_FORGOT_PASSWORD, data, EMsgActions.SUCCESS_FORGOT_PASSWORD);

const apiAuthRegisterUser = (data: IFormRegDataApi): Promise<IApiResultReturn> => {
  const payloadData: IFormRegDataApi = {
    email: data.email,
    username: data.username,
    password: data.password,
  };

  return apiFetchPost<IFormRegDataApi>(API_REGISTER_USER, payloadData, EMsgActions.SUCCESS_REG);
};

const apiAuthResetPassword = (data: IFormPasswordNewData): Promise<IApiResultReturn> =>
  apiFetchPost(API_RESET_PASSWORD, data, EMsgActions.SUCCESS_CHANGE_PASSWORD);

const apiAuthLoginUser = async (data: IFormLoginData): Promise<ILoginUserReturn> => {
  try {
    const res = await fetch(API_LOGIN, {
      method: EApiMethods.POST,
      headers: { 'Content-Type': CONTENT_TYPE },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      const message: string = getFailedMsg(result?.error?.message);

      return { isSuccess: false, message };
    }

    (await cookies()).set(COOKIES_JWT, result.jwt, {
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
    cookiesStore.delete(COOKIES_JWT);

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

export { apiAuthForgotPassword, apiAuthLoginUser, apiAuthLogoutUser, apiAuthRegisterUser, apiAuthResetPassword };
