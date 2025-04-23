import { IBasePage, IHeaderSearchBlockPage } from '@/utils/interfaces';

import { API_CATEGORIES_PAGE, EMsgActions } from '../utils';

interface ICategoriesPage extends IBasePage {
  headerBlock: IHeaderSearchBlockPage;
}

export async function apiGetCategoriesPage(): Promise<ICategoriesPage> {
  const res = await fetch(API_CATEGORIES_PAGE, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  const data = await res.json();

  return data;
}
