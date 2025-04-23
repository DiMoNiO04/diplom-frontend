import { IBasePage } from '@/utils/interfaces';

import { API_PRIVACY_POLICY, EMsgActions, REVALIDATE_HOUR_TIME } from '../utils';

interface IPrivacyPolicyPage extends IBasePage {
  content: string;
}

export async function apiGetPrivacyPolicyPage(): Promise<IPrivacyPolicyPage> {
  const res = await fetch(API_PRIVACY_POLICY, {
    next: { revalidate: REVALIDATE_HOUR_TIME },
  });

  if (!res.ok) {
    throw new Error(EMsgActions.FAILED_FETCH);
  }

  const data = await res.json();

  return data;
}
