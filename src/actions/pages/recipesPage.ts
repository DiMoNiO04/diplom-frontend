import { IBasePage, IHeaderSearchBlockPage } from '@/utils/interfaces';

import { API_RECIPES_PAGE, EMsgActions } from '../utils';

interface IRecipesPage extends IBasePage {
  headerBlock: IHeaderSearchBlockPage;
}

export async function apiGetRecipesPage(): Promise<IRecipesPage> {
  const res = await fetch(API_RECIPES_PAGE, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  const data = await res.json();

  return data;
}
