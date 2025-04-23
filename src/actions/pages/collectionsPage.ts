import { IBasePage, IHeaderSearchBlockPage } from '@/utils/interfaces';

import { API_COLLECTIONS_PAGE, EMsgActions } from '../utils';

interface ICollectionsPage extends IBasePage {
  headerBlock: IHeaderSearchBlockPage;
}

export async function apiGetCollectionsPage(): Promise<ICollectionsPage> {
  const res = await fetch(API_COLLECTIONS_PAGE, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  const data = await res.json();

  return data;
}
