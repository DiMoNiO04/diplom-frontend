import { IBasePage, ICollection } from '@/utils/interfaces';

import { apiFetch } from '../api';
import { API_COLLECTION } from '../utils';

interface ICollectionPage extends IBasePage, ICollection {}

export const apiGetSingleCollection = async (slug: string): Promise<ICollectionPage> =>
  (await apiFetch<{ data: ICollectionPage }>(API_COLLECTION(slug))).data;
