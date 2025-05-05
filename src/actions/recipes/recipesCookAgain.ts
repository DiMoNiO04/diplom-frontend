'use server';

import { cookies } from 'next/headers';

import { API_COOK_AGAIN_RECIPES } from '../utils';

export const apiGetRecipesCookAgain = async () => {
  const jwtToken = (await cookies()).get('jwt')?.value;

  if (!jwtToken) {
    return null;
  }

  try {
    const res = await fetch(API_COOK_AGAIN_RECIPES, {
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
