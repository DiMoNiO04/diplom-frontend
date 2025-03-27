import {
  CuratedCollections,
  EmailNewsletter,
  LatestRecipes,
  MainSlider,
  PopularCategories,
  ShareYourRecipe,
  SuperDelicioues,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <MainSlider />
      <PopularCategories />
      <SuperDelicioues />
      <ShareYourRecipe />
      <CuratedCollections />
      <LatestRecipes />
      <EmailNewsletter />
    </>
  );
}
