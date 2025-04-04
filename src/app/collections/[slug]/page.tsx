import { RecipesContent } from '@/components/sections';
import { collectionsData } from '@/data';
import { fetchByKey } from '@/utils/functions';
import { ICollection, IPageSlugProps } from '@/utils/interfaces';

export default async function CollectionPage({ params }: IPageSlugProps) {
  const collection: ICollection = await fetchByKey(collectionsData, 'slug', (await params).slug);

  return <RecipesContent {...collection} />;
}
