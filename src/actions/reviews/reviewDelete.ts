'use server';

import { cookies } from 'next/headers';

import { API_REVIEW, EMsgActions } from '../utils';

export async function apiReviewDelete(idReview: string) {
  const jwtToken = (await cookies()).get('jwt')?.value;

  if (!jwtToken) {
    return { isSuccess: false, message: EMsgActions.FAILED_FIND_TOKEN };
  }

  try {
    const res = await fetch(`${API_REVIEW}/${idReview}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    if (!res.ok) {
      const result = await res.json();
      const message = result?.error?.message || EMsgActions.FAILED_FETCH;
      return { isSuccess: false, message };
    }

    return { isSuccess: true, message: EMsgActions.SUCCESS_DELETE_REVIEW };
  } catch (err) {
    console.error(EMsgActions.FAILED_FETCH, err);
    return { isSuccess: false, message: EMsgActions.FAILED_FETCH_TRY_AGAIN };
  }
}
