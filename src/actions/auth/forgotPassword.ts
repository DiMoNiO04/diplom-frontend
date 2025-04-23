import { IFormPasswordForgotData } from '@/utils/validations';

import { API_FORGOT_PASSWORD, IAuthUserReturn } from '../utils';

export const forgotPassword = async (data: IFormPasswordForgotData): Promise<IAuthUserReturn> => {
  try {
    const res = await fetch(API_FORGOT_PASSWORD, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      return { isSuccess: false, message: result?.error?.message || 'Ошибка отправки email' };
    }

    return {
      isSuccess: true,
      message: 'Отправили Вам письмо с дальнейшими инструкциями на указанную почту',
    };
  } catch (err) {
    console.error('Ошибка сети или сервера:', err);
    return { isSuccess: false, message: 'Ошибка сети. Повторите позже.' };
  }
};
