import { API_REGISTER_USER, IAuthUserReturn } from '../utils';

interface IFormRegDataApi {
  username: string;
  email: string;
  password: string;
}

export const registerUser = async (data: IFormRegDataApi): Promise<IAuthUserReturn> => {
  try {
    const response = await fetch(API_REGISTER_USER, {
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

    if (response.ok) {
      return {
        isSuccess: true,
        message: 'Благодарим за регистрацию! Ссылка для подтверждения аккаунта будет отправлена на вашу почту.',
      };
    } else {
      return { isSuccess: false, message: 'Адрес электронной почты или имя пользователя уже заняты!' };
    }
  } catch (error) {
    console.error('Ошибка сети или сервера: ', error);
    return { isSuccess: false, message: 'Произошла ошибка при регистрации. Попробуйте позже.' };
  }
};
