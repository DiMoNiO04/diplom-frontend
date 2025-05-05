import { Metadata } from 'next';

import { apiGetRecipe, apiGetRecipesCookAgain } from '@/actions/recipes';
import { AlreadyMade, AlsoLike, EmailNewsletter, RecipeContentInfo, RecipeTopInfo } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { getRecipeBreadcrumbs } from '@/utils/breadcrumbs';
import { IPageSlugProps } from '@/utils/interfaces';
import { createMetadata } from '@/utils/seo';
import { EUrls } from '@/utils/urls';

export async function generateMetadata({ params }: IPageSlugProps): Promise<Metadata> {
  const slug = (await params).slug;

  const { seo } = await apiGetRecipe(slug);
  seo.canonicalURL = `${EUrls.RECIPES.slice(1)}/${slug}`;

  return createMetadata(seo);
}

export default async function RecipePage({ params }: IPageSlugProps) {
  const slug = (await params).slug;

  const [recipe, { data: recipesCookAgain }] = await Promise.all([apiGetRecipe(slug), apiGetRecipesCookAgain()]);

  const cookAgainItem = recipesCookAgain.find(
    (r: { recipe: { documentId: string } }) => r.recipe?.documentId === recipe.documentId
  );

  const isRecipeInCookAgain = !!cookAgainItem;
  const reviewId = cookAgainItem?.documentId || null;

  const breadcrumbs = getRecipeBreadcrumbs(recipe.title);

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <RecipeTopInfo {...recipe} />
      <RecipeContentInfo {...recipe} />
      <AlreadyMade idRecipe={recipe.documentId} isRecipeInCookAgain={isRecipeInCookAgain} reviewId={reviewId} />
      <AlsoLike idRecipe={recipe.documentId} categories={recipe.categories} />
      <EmailNewsletter />
    </>
  );
}
