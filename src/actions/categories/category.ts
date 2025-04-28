import { IBasePage, ICategory } from '@/utils/interfaces';

import { API_CATEGORY, EMsgActions } from '../utils';

interface ICategoryPage extends IBasePage, ICategory {}

export async function apiGetCategory(slug: string): Promise<ICategoryPage> {
  const res = await fetch(API_CATEGORY(slug), {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  const { data } = await res.json();

  return data;
}
