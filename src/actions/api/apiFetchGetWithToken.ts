'use server';

import { cookies } from 'next/headers';

export const apiFetchGetWithToken = async (url: string) => {
  const jwtToken = (await cookies()).get('jwt')?.value;

  if (!jwtToken) {
    return null;
  }

  try {
    const res = await fetch(url, {
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
