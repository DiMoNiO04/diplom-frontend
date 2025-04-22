import { Metadata } from 'next';

import { getCategories } from '@/actions/categories';
import { getCategoriesPage } from '@/actions/pages';
import { CategoriesAll } from '@/components/sections';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getCategoriesPage();
  return createMetadata(seo);
}

export default async function CategoriesPage() {
  const { headerBlock } = await getCategoriesPage();
  const { results: cards } = await getCategories();

  return <CategoriesAll cards={cards} {...headerBlock} />;
}
