import { getFailedMsg } from '@/utils/functions';

import { API_REGISTER_USER, EMsgActions, IApiResultReturn } from '../utils';

interface IFormRegDataApi {
  username: string;
  email: string;
  password: string;
}

export const apiAuthRegisterUser = async (data: IFormRegDataApi): Promise<IApiResultReturn> => {
  try {
    const res = await fetch(API_REGISTER_USER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      const message: string = getFailedMsg(result?.error?.message);

      return { isSuccess: false, message };
    }

    return {
      isSuccess: true,
      message: EMsgActions.SUCCESS_REG,
    };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
};
