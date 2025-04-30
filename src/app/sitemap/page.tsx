import { Metadata } from 'next';

import { apiGetCategories } from '@/actions/categories';
import { apiGetCollections } from '@/actions/collections';
import { apiGetRecipes } from '@/actions/recipes';
import { SitemapContent } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { breadcrumbsSitemapPage } from '@/utils/breadcrumbs';
import { createMetadata } from '@/utils/seo';
import { seoSitemapPage } from '@/utils/seo/seoData';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata(seoSitemapPage());
}

export default async function SitemapPage() {
  const [recipesData, categoriesData, collectionsData] = await Promise.all([
    apiGetRecipes(),
    apiGetCategories(),
    apiGetCollections(),
  ]);

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsSitemapPage} />
      <SitemapContent
        recipes={recipesData.results}
        categories={categoriesData.results}
        collections={collectionsData.results}
      />
    </>
  );
}
