import { IBasePage, ICollection } from '@/utils/interfaces';

import { API_COLLECTIONS } from '../consts';

interface ICollectionsPage extends IBasePage {
  results: ICollection[];
}

export async function getCollections(): Promise<ICollectionsPage> {
  const res = await fetch(API_COLLECTIONS, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Collections');
  }

  const data = await res.json();

  return data;
}
