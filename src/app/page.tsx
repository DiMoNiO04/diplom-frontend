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
  return (
    <>
      <MainSlider />
      <CategoriesMain />
      <SuperDelicioues />
      <ShareYourRecipe />
      <CuratedCollections />
      <LatestRecipes />
      <EmailNewsletter />
    </>
  );
}
