import { Metadata } from 'next';

import { apiGetPagePrivacyPolicy } from '@/actions/pages';
import { PrivacyPolicyContent } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { breadcrumbsPrivacyPolicyPage } from '@/utils/breadcrumbs';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await apiGetPagePrivacyPolicy();
  return createMetadata(seo);
}

export default async function PrivacyPolicyPage() {
  const { title, content } = await apiGetPagePrivacyPolicy();

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsPrivacyPolicyPage} />
      <PrivacyPolicyContent title={title} content={content} />
    </>
  );
}
