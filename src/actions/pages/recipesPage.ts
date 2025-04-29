import { IBasePage, IHeaderSearchBlockPage } from '@/utils/interfaces';

import { apiFetch } from '../api';
import { API_RECIPES_PAGE } from '../utils';

interface IRecipesPage extends IBasePage {
  headerBlock: IHeaderSearchBlockPage;
}

export const apiGetRecipesPage = (): Promise<IRecipesPage> => apiFetch<IRecipesPage>(API_RECIPES_PAGE);
