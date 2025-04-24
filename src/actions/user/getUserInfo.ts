import { cookies } from 'next/headers';

import { IUserProfileInfo } from '@/components/sections/ProfileContent';

import { API_USER_INFO, EMsgActions } from '../utils';

export async function apiGetUserInfo(): Promise<IUserProfileInfo> {
  const cookieStore = await cookies();
  const jwt = cookieStore.get('jwt')?.value;

  if (!jwt) {
    throw new Error(EMsgActions.FAILED_FIND_TOKEN);
  }

  const res = await fetch(API_USER_INFO, {
    cache: 'no-cache',
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  const data = await res.json();
  return data;
}
