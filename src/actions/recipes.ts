import { SITE_NAME } from '@/utils/consts';
import { IBasePage, IRecipe } from '@/utils/interfaces';
import { IFormRecipeData } from '@/utils/validations';

import { apiFetch, apiFetchDelete, apiFetchGetWithToken, apiFetchPostWithToken } from './api';
import { apiFetchPut } from './api/apiFetchPut';
import {
  API_COOK_AGAIN_RECIPES,
  API_MY_RECIPES,
  API_RECIPE,
  API_RECIPES,
  API_RECIPES_BEST,
  EMsgActions,
  IApiResultReturn,
} from './utils';

interface IRecipePage extends IBasePage, IRecipe {}

interface IRecipesAll {
  results: IRecipe[];
}

const apiGetRecipe = async (slug: string): Promise<IRecipePage> =>
  (await apiFetch<{ data: IRecipePage }>(API_RECIPE(slug))).data;

const buildRecipePayload = (data: IFormRecipeData) => {
  const { shortDescription, ...restData } = data;

  return {
    ...restData,
    img: data.img.map((img) => img.id),
    seo: {
      metaTitle: `${data.title} | ${SITE_NAME}`,
      metaDescription: shortDescription,
      metaRobots: 'index, follow',
      openGraph: {
        ogTitle: `${data.title} | ${SITE_NAME}`,
        ogDescription: shortDescription,
      },
    },
  };
};

const apiCreateRecipe = (data: IFormRecipeData): Promise<IApiResultReturn> => {
  const extendedData = buildRecipePayload(data);

  return apiFetchPostWithToken(API_RECIPES, { data: extendedData }, EMsgActions.SUCCESS_CREATE_RECIPE);
};

const apiUpdateRecipe = (data: IFormRecipeData, idRecipe: string): Promise<IApiResultReturn> => {
  const extendedData = buildRecipePayload(data);

  return apiFetchPut(API_RECIPE(idRecipe), { data: extendedData }, EMsgActions.SUCCESS_UPDATE_RECIPE);
};

const apiDeleteRecipe = (idRecipe: string) =>
  apiFetchDelete(`${API_RECIPES}/${idRecipe}`, EMsgActions.SUCCESS_DELETE_RECIPE);

const apiGetRecipes = (): Promise<IRecipesAll> => apiFetch<IRecipesAll>(API_RECIPES);

const apiGetRecipesBest = async (): Promise<IRecipe[]> => (await apiFetch<{ data: IRecipe[] }>(API_RECIPES_BEST)).data;

const apiGetRecipesCookAgain = () => apiFetchGetWithToken(API_COOK_AGAIN_RECIPES);

const apiGetRecipesUser = () => apiFetchGetWithToken(API_MY_RECIPES);

export {
  apiCreateRecipe,
  apiDeleteRecipe,
  apiGetRecipe,
  apiGetRecipes,
  apiGetRecipesBest,
  apiGetRecipesCookAgain,
  apiGetRecipesUser,
  apiUpdateRecipe,
};
