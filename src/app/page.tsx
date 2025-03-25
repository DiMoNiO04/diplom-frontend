import { LatestRecipes, MainSlider, PopularCategories } from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <MainSlider />
      <PopularCategories />
      <LatestRecipes />
    </>
  );
}
