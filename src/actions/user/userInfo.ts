'use server';

import { cookies } from 'next/headers';

import { IUserInfo } from '@/stores/user';

import { API_USER_INFO } from '../utils';

export async function apiGetUserInfo(): Promise<IUserInfo | null> {
  const jwtToken = (await cookies()).get('jwt')?.value;

  if (!jwtToken) {
    return null;
  }

  try {
    const res = await fetch(API_USER_INFO, {
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
}
