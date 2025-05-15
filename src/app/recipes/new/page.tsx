import { Metadata } from 'next';

import { apiGetCategories } from '@/actions/categories';
import { NewRecipe } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { breadcrumbsNewRecipePage } from '@/utils/breadcrumbs';
import { createMetadata } from '@/utils/seo';
import { seoAddRecipePage } from '@/utils/seo/seoData';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata(seoAddRecipePage());
}

export default async function NewRecipePage() {
  const categoriesData = await apiGetCategories();

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsNewRecipePage} />
      <NewRecipe categories={categoriesData.results} />
    </>
  );
}
