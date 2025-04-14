import { Metadata } from 'next';

import { getCategories, getCategoriesPage } from '@/actions';
import { CategoriesAll } from '@/components/sections';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getCategoriesPage();
  return createMetadata(seo);
}

export default async function CategoriesPage() {
  const { title } = await getCategoriesPage();
  const { results: cards } = await getCategories();

  return <CategoriesAll title={title} cards={cards} />;
}
