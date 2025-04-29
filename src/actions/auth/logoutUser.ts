'use server';

import { cookies, headers } from 'next/headers';

import { protectedPaths } from '@/utils/consts';
import { EUrls } from '@/utils/urls';

import { EMsgActions } from '../utils';

export const apiLogoutUser = async () => {
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
