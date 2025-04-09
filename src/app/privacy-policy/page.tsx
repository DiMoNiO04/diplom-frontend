import { Metadata } from 'next';

import { getPrivacyPolicyPage } from '@/actions';
import { PrivacyPolicyContent } from '@/components/sections';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getPrivacyPolicyPage();
  return createMetadata(seo);
}

export default async function PrivacyPolicyPage() {
  const { title, content } = await getPrivacyPolicyPage();

  return (
    <div>
      <PrivacyPolicyContent title={title} content={content} />
    </div>
  );
}
