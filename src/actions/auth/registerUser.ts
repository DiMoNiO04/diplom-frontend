import { API_REGISTER_USER, EMsgActions, IAuthUserReturn } from '../utils';

interface IFormRegDataApi {
  username: string;
  email: string;
  password: string;
}

const getFailedMsg = (message: string): string => {
  if (message === 'Email or Username are already taken') {
    message = EMsgActions.FAILED_REG;
  }

  return message;
};

export const apiRegisterUser = async (data: IFormRegDataApi): Promise<IAuthUserReturn> => {
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
