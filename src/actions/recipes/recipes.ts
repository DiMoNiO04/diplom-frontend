import { IRecipe } from '@/utils/interfaces';

import { apiFetch } from '../api';
import { API_RECIPES } from '../utils';

interface IRecipesAll {
  results: IRecipe[];
}

export const apiGetRecipes = async (): Promise<IRecipesAll> => apiFetch<IRecipesAll>(API_RECIPES);
