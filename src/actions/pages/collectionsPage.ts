import { IBasePage, IHeaderSearchBlockPage } from '@/utils/interfaces';

import { apiFetch } from '../api';
import { API_COLLECTIONS_PAGE } from '../utils';

interface ICollectionsPage extends IBasePage {
  headerBlock: IHeaderSearchBlockPage;
}

export const apiGetCollectionsPage = (): Promise<ICollectionsPage> => apiFetch<ICollectionsPage>(API_COLLECTIONS_PAGE);
