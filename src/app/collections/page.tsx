import { Metadata } from 'next';

import { apiGetCollections } from '@/actions/collections';
import { CollectionsAll } from '@/components/sections';
import { createMetadata } from '@/utils/seo';
import { seoCollectionsPage } from '@/utils/seo/seoData';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata(seoCollectionsPage());
}

export default async function CollectionsPage() {
  const { results: cards } = await apiGetCollections();

  return <CollectionsAll cards={cards} />;
}
