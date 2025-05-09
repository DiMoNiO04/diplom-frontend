import { IBasePage, ICollection } from '@/utils/interfaces';

import { apiFetch } from './api';
import { API_COLLECTION, API_COLLECTIONS } from './utils';

interface ICollectionPage extends IBasePage, ICollection {}

interface ICollectionsPage extends IBasePage {
  results: ICollection[];
}

const apiGetSingleCollection = async (slug: string): Promise<ICollectionPage> =>
  (await apiFetch<{ data: ICollectionPage }>(API_COLLECTION(slug))).data;

const apiGetCollections = (): Promise<ICollectionsPage> => apiFetch<ICollectionsPage>(API_COLLECTIONS);

export { apiGetCollections, apiGetSingleCollection };
