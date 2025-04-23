import { IBasePage, IImage, IRecipe } from '@/utils/interfaces';

import { API_CATEGORY, EMsgActions } from '../utils';

interface ICategoriesPage extends IBasePage {
  title: string;
  description: string;
  img: IImage;
  fullImage: IImage;
  recipes: IRecipe[];
}

export async function apiGetCategory(slug: string): Promise<ICategoriesPage> {
  const res = await fetch(API_CATEGORY(slug), {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  const { data } = await res.json();

  return data;
}
