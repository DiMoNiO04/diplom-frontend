import { Editecipe } from '@/components/sections';
import { recipesData } from '@/data';
import { fetchByKey } from '@/utils/functions';
import { IPageSlugProps, IRecipe } from '@/utils/interfaces';

export default async function EditRecipePage({ params }: IPageSlugProps) {
  const recipe: IRecipe = await fetchByKey(recipesData, 'id', (await params).slug);

  return <Editecipe {...recipe} />;
}
