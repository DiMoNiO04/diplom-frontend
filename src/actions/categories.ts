import { IBasePage, ICategory } from '@/utils/interfaces';

import { apiFetch } from './api';
import { API_CATEGORIES, API_CATEGORY } from './utils';

interface ICategoriesAll {
  results: ICategory[];
}

interface ICategoryPage extends IBasePage, ICategory {}

const apiGetCategories = (): Promise<ICategoriesAll> => apiFetch<ICategoriesAll>(API_CATEGORIES);

const apiGetCategory = async (slug: string): Promise<ICategoryPage> =>
  (await apiFetch<{ data: ICategoryPage }>(API_CATEGORY(slug))).data;

export { apiGetCategories, apiGetCategory };
