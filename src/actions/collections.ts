import { apiFetch } from './api';
import { ICollectionPage, ICollectionsPage } from './interfaces';
import { API_COLLECTION, API_COLLECTIONS } from './utils';

const apiGetSingleCollection = async (slug: string): Promise<ICollectionPage> =>
  (await apiFetch<{ data: ICollectionPage }>(API_COLLECTION(slug))).data;

const apiGetCollections = (): Promise<ICollectionsPage> => apiFetch<ICollectionsPage>(API_COLLECTIONS);

export { apiGetCollections, apiGetSingleCollection };
