import { getShareRecipeTemplate } from '@/actions';
import {
  CuratedCollections,
  EmailNewsletter,
  LatestRecipes,
  MainSlider,
  PopularCategories,
  ShareYourRecipe,
  SuperDelicioues,
} from '@/components/sections';

export default async function MainPage() {
  const shareRecipeTemplate = await getShareRecipeTemplate();

  return (
    <>
      <MainSlider />
      <PopularCategories />
      <SuperDelicioues />
      <ShareYourRecipe {...shareRecipeTemplate} />
      <CuratedCollections />
      <LatestRecipes />
      <EmailNewsletter />
    </>
  );
}
