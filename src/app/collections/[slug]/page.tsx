import { RecipesContent } from '@/components/sections';
import { IPageSlugProps } from '@/utils/interfaces';

export default async function CollectionPage({ params }: IPageSlugProps) {
  return <RecipesContent {...collection} />;
}
