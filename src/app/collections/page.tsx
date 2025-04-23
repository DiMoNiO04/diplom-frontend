import { Metadata } from 'next';

import { apiGetCollections } from '@/actions/collections';
import { apiGetCollectionsPage } from '@/actions/pages';
import { CollectionsAll } from '@/components/sections';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await apiGetCollectionsPage();
  return createMetadata(seo);
}

export default async function CollectionsPage() {
  const { headerBlock } = await apiGetCollectionsPage();
  const { results: cards } = await apiGetCollections();

  return <CollectionsAll cards={cards} {...headerBlock} />;
}
