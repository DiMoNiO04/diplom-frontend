import { IFormPasswordNewData } from '@/utils/validations';

import { API_RESET_PASSWORD, EMsgActions, IAuthUserReturn } from '../utils';

export const apiResetPassword = async (data: IFormPasswordNewData): Promise<IAuthUserReturn> => {
  try {
    const res = await fetch(API_RESET_PASSWORD, {
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
      message: EMsgActions.SUCCESS_CHANGE_PASSWORD,
    };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
};
