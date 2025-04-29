import { IBasePage, ICategory } from '@/utils/interfaces';

import { apiFetch } from '../api';
import { API_CATEGORY } from '../utils';

interface ICategoryPage extends IBasePage, ICategory {}

export const apiGetCategory = async (slug: string): Promise<ICategoryPage> =>
  (await apiFetch<{ data: ICategoryPage }>(API_CATEGORY(slug))).data;
