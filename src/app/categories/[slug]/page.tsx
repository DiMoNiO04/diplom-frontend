import { Metadata } from 'next';

import { getCategory } from '@/actions';
import { CategoryHeaderImage, RecipesContent } from '@/components/sections';
import { IPageSlugProps } from '@/utils/interfaces';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata({ params }: IPageSlugProps): Promise<Metadata> {
  const { seo } = await getCategory((await params).slug);
  return createMetadata(seo);
}

export default async function CategoryPage({ params }: IPageSlugProps) {
  const category = await getCategory((await params).slug);

  return (
    <>
      <CategoryHeaderImage img={category.fullImage} />
      <RecipesContent {...category} />
    </>
  );
}
