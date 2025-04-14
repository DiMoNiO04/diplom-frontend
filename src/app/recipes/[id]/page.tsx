import { getEmailNewsletterTemplate } from '@/actions';
import { AlreadyMade, AlsoLike, EmailNewsletter, RecipeContentInfo, RecipeTopInfo } from '@/components/sections';
import { recipesData } from '@/data';
import { fetchByKey } from '@/utils/functions';
import { IPageIdProps, IRecipe } from '@/utils/interfaces';

export default async function RecipePage({ params }: IPageIdProps) {
  const recipe: IRecipe = await fetchByKey(recipesData, 'id', (await params).id);
  const emailNewsletterTemplate = await getEmailNewsletterTemplate();

  return (
    <>
      <RecipeTopInfo {...recipe} />
      <RecipeContentInfo {...recipe} />
      <AlreadyMade />
      <AlsoLike idRecipe={recipe.id} category={recipe.category} />
      <EmailNewsletter {...emailNewsletterTemplate} />
    </>
  );
}
