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
