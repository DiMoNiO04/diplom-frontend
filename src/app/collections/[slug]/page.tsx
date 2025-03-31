import { notFound } from 'next/navigation';

import { CollectionContent } from '@/components/sections';
import { collectionsData } from '@/data';
import { ICollection } from '@/utils/interfaces';

async function getCollectionBySlug(slug: string): Promise<ICollection | null> {
  return collectionsData.find((category) => category.slug === slug) || null;
}

async function fetchCollection(params: { slug: string }): Promise<ICollection> {
  const { slug } = params;
  const collectionData = await getCollectionBySlug(slug);

  if (!collectionData) {
    notFound();
  }

  return collectionData;
}

interface ICollectionPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CollectionPage({ params }: ICollectionPageProps) {
  const collection: ICollection = await fetchCollection(await params);

  return (
    <>
      <CollectionContent {...collection} />
    </>
  );
}
