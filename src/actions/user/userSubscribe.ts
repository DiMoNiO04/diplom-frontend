'use server';

import { cookies } from 'next/headers';

import { API_USERS, EMsgActions } from '../utils';

export interface IApiUserSubscribe {
  email: string;
  isSubscribe: boolean;
}

export async function apiUserSubscribe(idUser: number, data: IApiUserSubscribe) {
  const jwtToken = (await cookies()).get('jwt')?.value;

  const { email, isSubscribe } = data;

  if (!jwtToken) {
    return { isSuccess: false, message: EMsgActions.FAILED_FIND_TOKEN };
  }

  try {
    const res = await fetch(`${API_USERS}${idUser}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const result = await res.json();
      const message = result?.error?.message || EMsgActions.FAILED_FETCH;
      return { isSuccess: false, message };
    }

    return {
      isSuccess: true,
      message: isSubscribe
        ? `Подписка на еженедельную рассылку оформлена на почту: ${email}!`
        : 'Вы отписались от еженедельной рассылки!',
    };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
}
