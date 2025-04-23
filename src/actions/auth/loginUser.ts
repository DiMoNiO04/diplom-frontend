'use server';

import { cookies } from 'next/headers';

import { API_LOGIN } from '../utils';

export const loginUser = async (data: { identifier: string; password: string }) => {
  try {
    const res = await fetch(API_LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      return { isSuccess: false, message: result?.error?.message || 'Ошибка авторизации' };
    }

    (await cookies()).set('jwt', result.jwt, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    return {
      isSuccess: true,
      message: 'Вы авторизовались!',
      user: result.user,
    };
  } catch (err) {
    console.error('Login error:', err);
    return { isSuccess: false, message: 'Ошибка сети. Повторите позже.' };
  }
};
