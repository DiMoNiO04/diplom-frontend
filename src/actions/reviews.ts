import { apiFetchDelete, apiFetchPostWithToken } from './api';
import { API_REVIEW, EMsgActions, IApiResultReturn } from './utils';

type TReviewType = 'yes' | 'no';

export interface IReviewCreateData {
  recipeId: string;
  userId?: number;
  reviewType: TReviewType;
}

const apiReviewCreate = (data: IReviewCreateData): Promise<IApiResultReturn> => {
  const payload = {
    data: {
      recipe: data.recipeId,
      user: data.userId,
      reviewType: data.reviewType,
    },
  };

  return apiFetchPostWithToken(API_REVIEW, payload, EMsgActions.SUCCESS_CREATE_REVIEW);
};

const apiReviewDelete = (idReview: string) =>
  apiFetchDelete(`${API_REVIEW}/${idReview}`, EMsgActions.SUCCESS_DELETE_REVIEW);

export { apiReviewCreate, apiReviewDelete };
