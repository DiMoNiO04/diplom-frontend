import { Metadata } from 'next';

import { getCollectionsPage } from '@/actions';
import { CollectionsAll } from '@/components/sections';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getCollectionsPage();
  return createMetadata(seo);
}

export default async function CollectionsPage() {
  const { headerBlock } = await getCollectionsPage();

  return <CollectionsAll {...headerBlock} />;
}
