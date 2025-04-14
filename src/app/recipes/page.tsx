import { RecipesContent } from '@/components/sections';
import { recipesData } from '@/data';

export default function RecipesPage() {
  return <RecipesContent recipes={recipesData} title={'Рецепты'} />;
}
