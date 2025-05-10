import { Metadata } from 'next';

import { apiGetRecipes, apiGetRecipesBest } from '@/actions/recipes';
import {
  CategoriesMain,
  CuratedCollections,
  DeliciousRecipes,
  EmailNewsletter,
  LatestRecipes,
  MainSlider,
  ShareYourRecipe,
} from '@/components/sections';
import { IRecipe } from '@/utils/interfaces';
import { createMetadata, seoMainPage } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata(seoMainPage());
}

export default async function MainPage() {
  const [recipes, recipesBest]: [{ results: IRecipe[] }, IRecipe[]] = await Promise.all([
    apiGetRecipes(),
    apiGetRecipesBest(),
  ]);

  return (
    <>
      <MainSlider recipes={recipesBest} />
      <CategoriesMain />
      <DeliciousRecipes recipes={recipesBest} />
      <ShareYourRecipe />
      <CuratedCollections />
      <LatestRecipes recipes={recipes.results} />
      <EmailNewsletter />
    </>
  );
}
