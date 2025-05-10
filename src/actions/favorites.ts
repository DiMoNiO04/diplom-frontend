'use server';

import { apiFetchDelete, apiFetchGetWithToken, apiFetchPostWithToken } from './api';
import { IApiResultReturn, IFavoriteAddData } from './interfaces';
import { API_FAVORITES, API_FAVORITES_ALL_DELETE, API_FAVORITES_USER, EMsgActions } from './utils';

const apiFavoriteDelete = (idFavorite: string) =>
  apiFetchDelete(`${API_FAVORITES}/${idFavorite}`, EMsgActions.SUCCESS_DELETE_FAVORITE);

const apiFavoritesDeleteAllUser = () =>
  apiFetchDelete(API_FAVORITES_ALL_DELETE, EMsgActions.SUCCESS_DELETE_ALL_FAVORITES);

const apiGetFavoritesUser = () => apiFetchGetWithToken(API_FAVORITES_USER);

const apiFavoriteAdd = (data: IFavoriteAddData): Promise<IApiResultReturn> => {
  const payload = {
    data: {
      recipe: data.recipeId,
      user: data.userId,
    },
  };

  return apiFetchPostWithToken(API_FAVORITES, payload, EMsgActions.SUCCESS_ADD_FAVORITE);
};

export { apiFavoriteAdd, apiFavoriteDelete, apiFavoritesDeleteAllUser, apiGetFavoritesUser };
