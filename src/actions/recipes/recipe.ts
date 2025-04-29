import { IBasePage, IRecipe } from '@/utils/interfaces';

import { apiFetch } from '../api';
import { API_RECIPE } from '../utils';

interface IRecipePage extends IBasePage, IRecipe {}

export const apiGetRecipe = async (slug: string): Promise<IRecipePage> =>
  (await apiFetch<{ data: IRecipePage }>(API_RECIPE(slug))).data;
