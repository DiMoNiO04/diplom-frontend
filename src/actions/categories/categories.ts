import { ICategory } from '@/utils/interfaces';

import { API_CATEGORIES, EMsgActions } from '../utils';

interface ICategoriesAll {
  results: ICategory[];
}

export async function apiGetCategories(): Promise<ICategoriesAll> {
  const res = await fetch(API_CATEGORIES, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  const data = await res.json();

  return data;
}
