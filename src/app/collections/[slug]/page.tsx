import { Metadata } from 'next';

import { apiGetSingleCollection } from '@/actions/collections';
import { HeaderBlockImage, RecipesContent } from '@/components/sections';
import { IPageSlugProps } from '@/utils/interfaces';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata({ params }: IPageSlugProps): Promise<Metadata> {
  const { seo } = await apiGetSingleCollection((await params).slug);
  return createMetadata(seo);
}

export default async function CollectionPage({ params }: IPageSlugProps) {
  const collection = await apiGetSingleCollection((await params).slug);

  return (
    <>
      <HeaderBlockImage img={collection.img} />
      <RecipesContent {...collection} />;
    </>
  );
}
