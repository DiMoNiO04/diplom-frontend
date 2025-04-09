import { ISEO } from '@/utils/seo';

import { API_PRIVACY_POLICY, REVALIDATE_HOUR_TIME } from './common';

export interface IPrivacyPolicyPage {
  title: string;
  content: string;
  seo: ISEO;
}

export async function getPrivacyPolicyPage(): Promise<IPrivacyPolicyPage> {
  const res = await fetch(API_PRIVACY_POLICY, {
    next: { revalidate: REVALIDATE_HOUR_TIME },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Privacy Policy');
  }

  const { data } = await res.json();

  return data;
}
