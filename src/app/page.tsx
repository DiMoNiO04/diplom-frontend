import { EmailNewsletter, LatestRecipes, MainSlider, PopularCategories, ShareYourRecipe } from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <MainSlider />
      <PopularCategories />
      <ShareYourRecipe />
      <LatestRecipes />
      <EmailNewsletter />
    </>
  );
}
