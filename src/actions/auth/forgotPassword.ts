import { IFormPasswordForgotData } from '@/utils/validations';

import { API_FORGOT_PASSWORD, EMsgActions, IApiResultReturn } from '../utils';

export const apiForgotPassword = async (data: IFormPasswordForgotData): Promise<IApiResultReturn> => {
  try {
    const res = await fetch(API_FORGOT_PASSWORD, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      return { isSuccess: false, message: result?.error?.message };
    }

    return {
      isSuccess: true,
      message: EMsgActions.SUCCESS_FORGOT_PASSWORD,
    };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
};
