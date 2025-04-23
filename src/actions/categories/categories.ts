import { IBasePage, ICategory } from '@/utils/interfaces';

import { API_CATEGORIES, EMsgActions } from '../utils';

interface ICategoriesPage extends IBasePage {
  results: ICategory[];
}

export async function apiGetCategories(): Promise<ICategoriesPage> {
  const res = await fetch(API_CATEGORIES, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  const data = await res.json();

  return data;
}
