'use server';

import { cookies } from 'next/headers';

import { EMsgActions } from '../utils';

export const apiLogoutUser = async () => {
  try {
    const cookiesStore = await cookies();
    cookiesStore.delete('jwt');

    return {
      isSuccess: true,
      message: EMsgActions.SUCCESS_EXIT_ACCOUNT,
    };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
};
