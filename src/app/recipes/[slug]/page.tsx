import { Metadata } from 'next';

import { apiGetRecipe } from '@/actions/recipes';
import { AlreadyMade, AlsoLike, EmailNewsletter, RecipeContentInfo, RecipeTopInfo } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { getRecipeBreadcrumbs } from '@/utils/breadcrumbs';
import { IPageSlugProps, IRecipe } from '@/utils/interfaces';
import { createMetadata } from '@/utils/seo';
import { EUrls } from '@/utils/urls';

export async function generateMetadata({ params }: IPageSlugProps): Promise<Metadata> {
  const slug = (await params).slug;

  const { seo } = await apiGetRecipe(slug);
  seo.canonicalURL = `${EUrls.RECIPES.slice(1)}/${slug}`;

  return createMetadata(seo);
}

export default async function RecipePage({ params }: IPageSlugProps) {
  const recipe: IRecipe = await apiGetRecipe((await params).slug);

  const breadcrumbs = getRecipeBreadcrumbs(recipe.title);

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <RecipeTopInfo {...recipe} />
      <RecipeContentInfo {...recipe} />
      <AlreadyMade />
      <AlsoLike idRecipe={recipe.documentId} categories={recipe.categories} />
      <EmailNewsletter />
    </>
  );
}
