'use server';

import { cookies } from 'next/headers';

export const logoutUser = async () => {
  try {
    const cookiesStore = await cookies();
    cookiesStore.delete('jwt');

    return {
      isSuccess: true,
      message: 'Вы вышли из аккаунта!',
    };
  } catch (err) {
    console.error('Ошибка выхода:', err);
    return { isSuccess: false, message: 'Ошибка при выходе. Повторите позже.' };
  }
};
