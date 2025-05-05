'use server';

import { cookies } from 'next/headers';

import { API_REVIEW, EMsgActions, IApiResultReturn } from '../utils';

type TReviewType = 'yes' | 'no';

export interface IReviewCreateData {
  recipeId: string;
  userId?: string;
  reviewType: TReviewType;
}

export const apiReviewCreate = async (data: IReviewCreateData): Promise<IApiResultReturn> => {
  const jwtToken = (await cookies()).get('jwt')?.value;

  if (!jwtToken) {
    return { isSuccess: false, message: EMsgActions.FAILED_FIND_TOKEN };
  }

  const reviewPayload = {
    recipe: data.recipeId,
    user: data.userId,
    reviewType: data.reviewType,
  };

  try {
    const res = await fetch(API_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({ data: reviewPayload }),
    });

    const result = await res.json();

    if (!res.ok) {
      return { isSuccess: false, message: result?.error?.message };
    }

    return {
      isSuccess: true,
      message: EMsgActions.SUCCESS_CREATE_REVIEW,
    };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
};
