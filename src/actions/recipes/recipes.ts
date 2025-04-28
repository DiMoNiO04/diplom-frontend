import { IRecipe } from '@/utils/interfaces';

import { API_RECIPES, EMsgActions } from '../utils';

interface IRecipesAll {
  results: IRecipe[];
}

export async function apiGetRecipes(): Promise<IRecipesAll> {
  const res = await fetch(API_RECIPES, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  const data = await res.json();

  return data;
}
