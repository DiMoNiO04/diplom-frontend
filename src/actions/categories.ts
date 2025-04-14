import { IBasePage, ICategory } from '@/utils/interfaces';

import { API_CATEGORIES } from './consts';

interface ICategoriesPage extends IBasePage {
  results: ICategory[];
}

export async function getCategories(): Promise<ICategoriesPage> {
  const res = await fetch(API_CATEGORIES, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Categories');
  }

  const data = await res.json();

  return data;
}
