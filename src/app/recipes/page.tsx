import { RecipesAll } from '@/components/sections';
import { recipesData } from '@/data';

export default function RecipesPage() {
  return <RecipesAll recipes={recipesData} name={'Рецепты'} />;
}
