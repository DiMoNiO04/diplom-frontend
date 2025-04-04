import { Editecipe } from '@/components/sections';
import { recipesData } from '@/data';
import { fetchByKey } from '@/utils/functions';
import { IPageIdProps, IRecipe } from '@/utils/interfaces';

export default async function EditRecipePage({ params }: IPageIdProps) {
  const recipe: IRecipe = await fetchByKey(recipesData, 'id', (await params).id);

  return <Editecipe {...recipe} />;
}
