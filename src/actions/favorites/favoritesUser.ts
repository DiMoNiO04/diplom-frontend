'use server';

import { cookies } from 'next/headers';

import { API_FAVORITES_USER } from '../utils';

export const apiGetFavoritesUser = async () => {
  const jwtToken = (await cookies()).get('jwt')?.value;

  if (!jwtToken) {
    return null;
  }

  try {
    const res = await fetch(API_FAVORITES_USER, {
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
