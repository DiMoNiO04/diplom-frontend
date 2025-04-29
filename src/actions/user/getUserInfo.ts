'use server';

import { cookies } from 'next/headers';

import { IUserInfo } from '@/stores/user';

import { API_USER_INFO } from '../utils';

export async function apiGetUserInfo(): Promise<IUserInfo | null> {
  const cookieStore = await cookies();
  const jwt = cookieStore.get('jwt')?.value;

  if (!jwt) {
    return null;
  }

  try {
    const res = await fetch(API_USER_INFO, {
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${jwt}`,
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
}
