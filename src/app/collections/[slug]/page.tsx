import { Metadata } from 'next';

import { apiGetSingleCollection } from '@/actions/collections';
import { HeaderBlockImage, RecipesContent } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { getCollectionBreadcrumbs } from '@/utils/breadcrumbs';
import { IPageSlugProps } from '@/utils/interfaces';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata({ params }: IPageSlugProps): Promise<Metadata> {
  const { seo } = await apiGetSingleCollection((await params).slug);
  return createMetadata(seo);
}

export default async function CollectionPage({ params }: IPageSlugProps) {
  const collection = await apiGetSingleCollection((await params).slug);

  const breadcrumbs = getCollectionBreadcrumbs(collection.title);

  return (
    <>
      <HeaderBlockImage img={collection.img} />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <RecipesContent {...collection} />;
    </>
  );
}
