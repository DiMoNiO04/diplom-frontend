import { IBasePage, ICollection } from '@/utils/interfaces';

import { apiFetch } from '../api';
import { API_COLLECTIONS } from '../utils';

interface ICollectionsPage extends IBasePage {
  results: ICollection[];
}

export const apiGetCollections = async (): Promise<ICollectionsPage> => apiFetch<ICollectionsPage>(API_COLLECTIONS);
