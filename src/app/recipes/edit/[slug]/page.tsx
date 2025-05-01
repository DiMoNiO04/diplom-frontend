import { apiGetRecipe } from '@/actions/recipes';
import { EditRecipe } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { getEditRecipeBreadcrumbs } from '@/utils/breadcrumbs';
import { IPageSlugProps, IRecipe } from '@/utils/interfaces';

export default async function EditRecipePage({ params }: IPageSlugProps) {
  const recipe: IRecipe = await apiGetRecipe((await params).slug);

  const breadcrumbs = getEditRecipeBreadcrumbs(recipe.title, recipe.documentId);

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <EditRecipe {...recipe} />
    </>
  );
}
