import { IRecipe } from '@/utils/interfaces';

import { apiFetch } from '../api';
import { API_RECIPES_BEST } from '../utils';

export const apiGetRecipesBest = async (): Promise<IRecipe[]> =>
  (await apiFetch<{ data: IRecipe[] }>(API_RECIPES_BEST)).data;
