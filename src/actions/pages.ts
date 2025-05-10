import { apiFetch } from './api';
import { IAboutPage, IPrivacyPolicyPage } from './interfaces';
import { API_ABOUT_PAGE, API_PRIVACY_POLICY, REVALIDATE_HOUR_TIME } from './utils';

const apiGetPageAbout = (): Promise<IAboutPage> =>
  apiFetch<IAboutPage>(API_ABOUT_PAGE, {
    next: { revalidate: REVALIDATE_HOUR_TIME },
  });

const apiGetPagePrivacyPolicy = (): Promise<IPrivacyPolicyPage> =>
  apiFetch<IPrivacyPolicyPage>(API_PRIVACY_POLICY, {
    next: { revalidate: REVALIDATE_HOUR_TIME },
  });

export { apiGetPageAbout, apiGetPagePrivacyPolicy };
