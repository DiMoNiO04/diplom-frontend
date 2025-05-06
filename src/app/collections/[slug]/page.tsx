import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { apiGetSingleCollection } from '@/actions/collections';
import { HeaderBlockImage, RecipesContent } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { getCollectionBreadcrumbs } from '@/utils/breadcrumbs';
import { ICollection, IPageSlugProps } from '@/utils/interfaces';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata({ params }: IPageSlugProps): Promise<Metadata> {
  const slug = (await params).slug;

  const collection = await apiGetSingleCollection(slug).catch(() => null);
  if (!collection) return {};

  return createMetadata(collection.seo);
}

export default async function CollectionPage({ params }: IPageSlugProps) {
  const slug = (await params).slug;

  const collection: ICollection | null = await apiGetSingleCollection(slug).catch(() => null);
  if (!collection) return notFound();

  const breadcrumbs = getCollectionBreadcrumbs(collection.title);

  return (
    <>
      <HeaderBlockImage img={collection.img} />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <RecipesContent {...collection} />;
    </>
  );
}
