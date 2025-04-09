import { Metadata } from 'next';

import { getPrivacyPolicyPage } from '@/actions';
import { PrivacyPolicyContent } from '@/components/sections';
import { createMetadata, createViewport } from '@/utils/seo';

export const generateViewport = () => createViewport();

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPrivacyPolicyPage();
  return createMetadata(seo);
}

export default async function PrivacyPolicyPage() {
  const { title, content } = await getPrivacyPolicyPage();

  return <PrivacyPolicyContent title={title} content={content} />;
}
