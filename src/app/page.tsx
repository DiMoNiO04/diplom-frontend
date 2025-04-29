import { Metadata } from 'next';

import { apiGetRecipes } from '@/actions/recipes';
import {
  CategoriesMain,
  CuratedCollections,
  DeliciousRecipes,
  EmailNewsletter,
  LatestRecipes,
  MainSlider,
  ShareYourRecipe,
} from '@/components/sections';
import { createMetadata, seoMainPage } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata(seoMainPage());
}

export default async function MainPage() {
  const { results: recipes } = await apiGetRecipes();

  return (
    <>
      <MainSlider recipes={recipes} />
      <CategoriesMain />
      <DeliciousRecipes recipes={recipes} />
      <ShareYourRecipe />
      <CuratedCollections />
      <LatestRecipes recipes={recipes} />
      <EmailNewsletter />
    </>
  );
}
