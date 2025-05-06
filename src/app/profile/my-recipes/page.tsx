import { Metadata } from 'next';

import { MyRecipesContent } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { breadcrumbsMyRecipesPage } from '@/utils/breadcrumbs';
import { createMetadata } from '@/utils/seo';
import { seoMyRecipesPage } from '@/utils/seo/seoData';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata(seoMyRecipesPage());
}

export default function MyRecipesPage() {
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsMyRecipesPage} />
      <MyRecipesContent />;
    </>
  );
}
