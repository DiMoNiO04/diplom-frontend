import { IBasePage } from '@/utils/interfaces';

import { apiFetch } from '../api';
import { API_PRIVACY_POLICY, REVALIDATE_HOUR_TIME } from '../utils';

interface IPrivacyPolicyPage extends IBasePage {
  content: string;
}

export const apiGetPrivacyPolicyPage = (): Promise<IPrivacyPolicyPage> =>
  apiFetch<IPrivacyPolicyPage>(API_PRIVACY_POLICY, {
    next: { revalidate: REVALIDATE_HOUR_TIME },
  });
