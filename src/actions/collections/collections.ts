import { IBasePage, ICollection } from '@/utils/interfaces';

import { API_COLLECTIONS, EMsgActions } from '../utils';

interface ICollectionsPage extends IBasePage {
  results: ICollection[];
}

export async function apiGetCollections(): Promise<ICollectionsPage> {
  const res = await fetch(API_COLLECTIONS, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  const data = await res.json();

  return data;
}
