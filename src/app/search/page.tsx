import { Metadata } from 'next';
import { Suspense } from 'react';

import { apiGetRecipes } from '@/actions/recipes';
import { EmailNewsletter, SearchResults } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { breadcrumbsSearchPage } from '@/utils/breadcrumbs';
import { createMetadata } from '@/utils/seo';
import { seoSearchPage } from '@/utils/seo/seoData';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata(seoSearchPage());
}

export default async function SearchPage() {
  const { results: recipes } = await apiGetRecipes();

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsSearchPage} />
      <Suspense fallback={<div>Загрузка...</div>}>
        <SearchResults recipes={recipes} />
      </Suspense>
      <EmailNewsletter />
    </>
  );
}
