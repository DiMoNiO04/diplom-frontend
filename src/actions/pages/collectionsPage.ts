import { IBasePage, IHeaderSearchBlockPage } from '@/utils/interfaces';

import { API_COLLECTIONS_PAGE } from '../utils';

interface ICollectionsPage extends IBasePage {
  headerBlock: IHeaderSearchBlockPage;
}

export async function getCollectionsPage(): Promise<ICollectionsPage> {
  const res = await fetch(API_COLLECTIONS_PAGE, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Collections Page');
  }

  const data = await res.json();

  return data;
}
