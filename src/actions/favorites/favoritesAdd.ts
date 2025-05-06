'use server';

import { cookies } from 'next/headers';

import { API_FAVORITES, EMsgActions, IApiResultReturn } from '../utils';

export interface IFavoriteAddData {
  recipeId: string;
  userId?: number;
}

export const apiFavoriteAdd = async (data: IFavoriteAddData): Promise<IApiResultReturn> => {
  const jwtToken = (await cookies()).get('jwt')?.value;

  if (!jwtToken) {
    return { isSuccess: false, message: EMsgActions.FAILED_FIND_TOKEN };
  }

  const favoritePayload = {
    recipe: data.recipeId,
    user: data.userId,
  };

  try {
    const res = await fetch(API_FAVORITES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({ data: favoritePayload }),
    });

    const result = await res.json();

    if (!res.ok) {
      return { isSuccess: false, message: result?.error?.message };
    }

    return {
      isSuccess: true,
      message: EMsgActions.SUCCESS_ADD_FAVORITE,
    };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
};
