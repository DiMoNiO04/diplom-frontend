import { Metadata } from 'next';

import { apiGetMainPage } from '@/actions/pages';
import { apiGetRecipes } from '@/actions/recipes';
import {
  CategoriesMain,
  CuratedCollections,
  EmailNewsletter,
  LatestRecipes,
  MainSlider,
  ShareYourRecipe,
  SuperDelicioues,
} from '@/components/sections';
import { createMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await apiGetMainPage();
  return createMetadata(seo);
}

export default async function MainPage() {
  const { results: recipes } = await apiGetRecipes();

  return (
    <>
      <MainSlider recipes={recipes} />
      <CategoriesMain />
      <SuperDelicioues recipes={recipes} />
      <ShareYourRecipe />
      <CuratedCollections />
      <LatestRecipes recipes={recipes} />
      <EmailNewsletter />
    </>
  );
}
