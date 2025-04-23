import { Metadata } from 'next';

import { apiGetCategories } from '@/actions/categories';
import { apiGetCategoriesPage } from '@/actions/pages';
import { CategoriesAll } from '@/components/sections';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await apiGetCategoriesPage();
  return createMetadata(seo);
}

export default async function CategoriesPage() {
  const { headerBlock } = await apiGetCategoriesPage();
  const { results: cards } = await apiGetCategories();

  return <CategoriesAll cards={cards} {...headerBlock} />;
}
