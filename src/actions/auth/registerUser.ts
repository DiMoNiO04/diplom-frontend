import { API_REGISTER_USER, IAuthUserReturn } from '../utils';

interface IFormRegDataApi {
  username: string;
  email: string;
  password: string;
}

export const registerUser = async (data: IFormRegDataApi): Promise<IAuthUserReturn> => {
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
      return { isSuccess: false, message: result?.error?.message || 'Ошибка регистрации' };
    }

    return {
      isSuccess: true,
      message: 'Благодарим за регистрацию! Ссылка для подтверждения аккаунта будет отправлена на вашу почту.',
    };
  } catch (error) {
    console.error('Ошибка сети или сервера: ', error);
    return { isSuccess: false, message: 'Произошла ошибка при регистрации. Попробуйте позже.' };
  }
};
