import { IBasePage, ISimpleContent, ITitleWithTexts } from '@/utils/interfaces';

import { apiFetch } from '../api';
import { API_ABOUT_PAGE, REVALIDATE_HOUR_TIME } from '../utils';

interface IAboutPage extends IBasePage {
  aboutMain: ISimpleContent;
  simpleRecipes: ISimpleContent;
  operating: ITitleWithTexts;
}

export const apiGetPageAbout = async (): Promise<IAboutPage> =>
  apiFetch<IAboutPage>(API_ABOUT_PAGE, {
    next: { revalidate: REVALIDATE_HOUR_TIME },
  });
