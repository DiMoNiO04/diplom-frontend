import { IBasePage, IHeaderSearchBlockPage } from '@/utils/interfaces';

import { API_CATEGORIES_PAGE } from '../consts';

interface ICategoriesPage extends IBasePage {
  headerBlock: IHeaderSearchBlockPage;
}

export async function getCategoriesPage(): Promise<ICategoriesPage> {
  const res = await fetch(API_CATEGORIES_PAGE, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Categories Page');
  }

  const data = await res.json();

  return data;
}
