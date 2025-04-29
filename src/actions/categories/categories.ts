import { ICategory } from '@/utils/interfaces';

import { apiFetch } from '../api';
import { API_CATEGORIES } from '../utils';

interface ICategoriesAll {
  results: ICategory[];
}

export const apiGetCategories = async (): Promise<ICategoriesAll> => apiFetch<ICategoriesAll>(API_CATEGORIES);
