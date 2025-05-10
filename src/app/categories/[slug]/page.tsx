import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { apiGetCategory } from '@/actions/categories';
import { HeaderBlockImage, RecipesContent } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { getCategoryBreadcrumbs } from '@/utils/breadcrumbs';
import { ICategory, IPageSlugProps } from '@/utils/interfaces';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata({ params }: IPageSlugProps): Promise<Metadata> {
  const slug = (await params).slug;

  const category = await apiGetCategory(slug).catch(() => null);
  if (!category) return {};

  return createMetadata(category.seo);
}

export default async function CategoryPage({ params }: IPageSlugProps) {
  const slug = (await params).slug;

  const category: ICategory | null = await apiGetCategory(slug).catch(() => null);
  if (!category) notFound();

  const breadcrumbs = getCategoryBreadcrumbs(category.title);

  return (
    <>
      <HeaderBlockImage img={category.fullImage} />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <RecipesContent {...category} />
    </>
  );
}
