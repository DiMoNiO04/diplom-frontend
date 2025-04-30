import { Metadata } from 'next';

import { apiGetPrivacyPolicyPage } from '@/actions/pages';
import { PrivacyPolicyContent } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { breadcrumbsPrivacyPolicyPage } from '@/utils/breadcrumbs';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await apiGetPrivacyPolicyPage();
  return createMetadata(seo);
}

export default async function PrivacyPolicyPage() {
  const { title, content } = await apiGetPrivacyPolicyPage();

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsPrivacyPolicyPage} />
      <PrivacyPolicyContent title={title} content={content} />
    </>
  );
}
