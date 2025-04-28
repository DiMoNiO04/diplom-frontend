import { IBasePage, ICollection } from '@/utils/interfaces';

import { API_COLLECTION, EMsgActions } from '../utils';

interface ICollectionPage extends IBasePage, ICollection {}

export async function apiGetSingleCollection(slug: string): Promise<ICollectionPage> {
  const res = await fetch(API_COLLECTION(slug), {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  const { data } = await res.json();

  return data;
}
