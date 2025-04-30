import { Metadata } from 'next';

import { apiGetCategories } from '@/actions/categories';
import { CategoriesAll } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { breadcrumbsCategoriesPage } from '@/utils/breadcrumbs';
import { createMetadata } from '@/utils/seo';
import { seoCategoriesPage } from '@/utils/seo/seoData';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata(seoCategoriesPage());
}

export default async function CategoriesPage() {
  const { results: cards } = await apiGetCategories();

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsCategoriesPage} />
      <CategoriesAll cards={cards} />
    </>
  );
}
