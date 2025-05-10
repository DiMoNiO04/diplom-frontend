import { apiFetch } from './api';
import { ICategoriesAll, ICategoryPage } from './interfaces';
import { API_CATEGORIES, API_CATEGORY } from './utils';

const apiGetCategories = (): Promise<ICategoriesAll> => apiFetch<ICategoriesAll>(API_CATEGORIES);

const apiGetCategory = async (slug: string): Promise<ICategoryPage> =>
  (await apiFetch<{ data: ICategoryPage }>(API_CATEGORY(slug))).data;

export { apiGetCategories, apiGetCategory };
