import { API_REGISTER_USER } from '../consts';

interface IRegisterUserReturn {
  success: boolean;
  message: string;
}

interface IFormRegDataApi {
  username: string;
  email: string;
  password: string;
}

export const registerUser = async (data: IFormRegDataApi): Promise<IRegisterUserReturn> => {
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
        success: true,
        message: 'Благодарим за регистрацию! Ссылка для подтверждения аккаунта будет отправлена на вашу почту.',
      };
    } else {
      return { success: false, message: 'Адрес электронной почты или имя пользователя уже заняты!' };
    }
  } catch (error) {
    console.error('Ошибка сети или сервера: ', error);
    return { success: false, message: 'Произошла ошибка при регистрации. Попробуйте позже.' };
  }
};
