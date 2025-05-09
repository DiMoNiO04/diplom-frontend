import { IBasePage, ISimpleContent, ITitleWithTexts } from '@/utils/interfaces';

import { apiFetch } from './api';
import { API_ABOUT_PAGE, API_PRIVACY_POLICY, REVALIDATE_HOUR_TIME } from './utils';

interface IAboutPage extends IBasePage {
  aboutMain: ISimpleContent;
  simpleRecipes: ISimpleContent;
  operating: ITitleWithTexts;
}

interface IPrivacyPolicyPage extends IBasePage {
  content: string;
}

const apiGetPageAbout = (): Promise<IAboutPage> =>
  apiFetch<IAboutPage>(API_ABOUT_PAGE, {
    next: { revalidate: REVALIDATE_HOUR_TIME },
  });

const apiGetPagePrivacyPolicy = (): Promise<IPrivacyPolicyPage> =>
  apiFetch<IPrivacyPolicyPage>(API_PRIVACY_POLICY, {
    next: { revalidate: REVALIDATE_HOUR_TIME },
  });

export { apiGetPageAbout, apiGetPagePrivacyPolicy };
