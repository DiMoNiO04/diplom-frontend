import { IPrivacyPolicy } from '@/components/sections/PrivacyPolicyContent';

import { API_PRIVACY_POLICY, REVALIDATE_HOUR_TIME } from './common';

export async function getPrivacyPolicyPage(): Promise<IPrivacyPolicy> {
  const res = await fetch(API_PRIVACY_POLICY, {
    next: { revalidate: REVALIDATE_HOUR_TIME },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch Privacy Policy');
  }

  const { data } = await res.json();

  return data;
}
