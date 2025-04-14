import { Metadata } from 'next';

import { getCategoriesPage } from '@/actions';
import { CategoriesAll } from '@/components/sections';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getCategoriesPage();
  return createMetadata(seo);
}

export default async function CategoriesPage() {
  const { title } = await getCategoriesPage();

  return <CategoriesAll title={title} />;
}
