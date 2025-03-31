import { notFound } from 'next/navigation';

import { CategoryHeaderImage } from '@/components/sections';
import { categoriesData } from '@/data';
import { ICategory } from '@/utils/interfaces';

async function getCategoryBySlug(slug: string): Promise<ICategory | null> {
  return categoriesData.find((category) => category.slug === slug) || null;
}

async function fetchCategory(params: { slug: string }): Promise<ICategory> {
  const { slug } = params;
  const categoryData = await getCategoryBySlug(slug);

  if (!categoryData) {
    notFound();
  }

  return categoryData;
}

interface ICategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: ICategoryPageProps) {
  const category = await fetchCategory(await params);

  return (
    <>
      <CategoryHeaderImage img={category.fullImage} />
    </>
  );
}
