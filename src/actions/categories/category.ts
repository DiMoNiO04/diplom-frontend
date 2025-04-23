import { IBasePage, IImage, IRecipe } from '@/utils/interfaces';

import { API_CATEGORY } from '../utils';

interface ICategoriesPage extends IBasePage {
  title: string;
  description: string;
  img: IImage;
  fullImage: IImage;
  recipes: IRecipe[];
}

export async function getCategory(slug: string): Promise<ICategoriesPage> {
  const res = await fetch(API_CATEGORY(slug), {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Category');
  }

  const { data } = await res.json();

  return data;
}
