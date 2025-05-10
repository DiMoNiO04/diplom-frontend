import { apiFetchDelete, apiFetchPostWithToken } from './api';
import { IApiResultReturn, IReviewCreateData } from './interfaces';
import { API_REVIEW, EMsgActions } from './utils';

const apiReviewDelete = (idReview: string) =>
  apiFetchDelete(`${API_REVIEW}/${idReview}`, EMsgActions.SUCCESS_DELETE_REVIEW);

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

export { apiReviewCreate, apiReviewDelete };
