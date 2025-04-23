import { IFormPasswordNewData } from '@/utils/validations';

import { API_RESET_PASSWORD, IAuthUserReturn } from '../utils';

export const resetPassword = async (data: IFormPasswordNewData): Promise<IAuthUserReturn> => {
  try {
    const res = await fetch(API_RESET_PASSWORD, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      return { isSuccess: false, message: result?.error?.message || 'Ошибка при смене пароля' };
    }

    return {
      isSuccess: true,
      message: 'Пароль успешно изменен',
    };
  } catch (err) {
    console.error('Ошибка сети или сервера:', err);
    return { isSuccess: false, message: 'Ошибка сети. Повторите позже.' };
  }
};
