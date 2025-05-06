import { Metadata } from 'next';

import { WantCookAgainContent } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { breadcrumbsWantCookAgainPage } from '@/utils/breadcrumbs';
import { createMetadata } from '@/utils/seo';
import { seoWantCookAgainPage } from '@/utils/seo/seoData';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata(seoWantCookAgainPage());
}

export default function WantCookAgain() {
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsWantCookAgainPage} />
      <WantCookAgainContent />;
    </>
  );
}
