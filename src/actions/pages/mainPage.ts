import { IBasePage } from '@/utils/interfaces';

import { apiFetch } from '../api';
import { API_ABOUT_PAGE, REVALIDATE_HOUR_TIME } from '../utils';

interface IMainPage extends IBasePage {
  title: string;
}

export const apiGetMainPage = async (): Promise<IMainPage> =>
  apiFetch<IMainPage>(API_ABOUT_PAGE, {
    next: { revalidate: REVALIDATE_HOUR_TIME },
  });
