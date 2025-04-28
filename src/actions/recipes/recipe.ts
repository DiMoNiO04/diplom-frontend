import { IBasePage, IRecipe } from '@/utils/interfaces';

import { API_RECIPE, EMsgActions } from '../utils';

interface IRecipePage extends IBasePage, IRecipe {}

export async function apiGetRecipe(slug: string): Promise<IRecipePage> {
  const res = await fetch(API_RECIPE(slug), {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  const { data } = await res.json();

  return data;
}
