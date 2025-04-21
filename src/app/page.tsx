import { getCategories, getEmailNewsletterTemplate, getShareRecipeTemplate } from '@/actions';
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
  const emailNewsletterTemplate = await getEmailNewsletterTemplate();
  const { results: cardsCategories } = await getCategories();

  return (
    <>
      <MainSlider />
      <PopularCategories cards={cardsCategories} />
      <SuperDelicioues />
      <ShareYourRecipe {...shareRecipeTemplate} />
      <CuratedCollections />
      <LatestRecipes />
      <EmailNewsletter {...emailNewsletterTemplate} />
    </>
  );
}
