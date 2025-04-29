import { IBasePage, IHeaderSearchBlockPage } from '@/utils/interfaces';

import { apiFetch } from '../api';
import { API_CATEGORIES_PAGE } from '../utils';

interface ICategoriesPage extends IBasePage {
  headerBlock: IHeaderSearchBlockPage;
}

export const apiGetCategoriesPage = (): Promise<ICategoriesPage> => apiFetch<ICategoriesPage>(API_CATEGORIES_PAGE);
