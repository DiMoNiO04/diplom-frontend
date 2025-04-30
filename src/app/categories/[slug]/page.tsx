import { Metadata } from 'next';

import { apiGetCategory } from '@/actions/categories';
import { HeaderBlockImage, RecipesContent } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { getCategoryBreadcrumbs } from '@/utils/breadcrumbs';
import { ICategory, IPageSlugProps } from '@/utils/interfaces';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata({ params }: IPageSlugProps): Promise<Metadata> {
  const { seo } = await apiGetCategory((await params).slug);
  return createMetadata(seo);
}

export default async function CategoryPage({ params }: IPageSlugProps) {
  const category: ICategory = await apiGetCategory((await params).slug);

  const breadcrumbs = getCategoryBreadcrumbs(category.title);

  return (
    <>
      <HeaderBlockImage img={category.fullImage} />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <RecipesContent {...category} />
    </>
  );
}
