import { apiGetRecipes } from '@/actions/recipes';
import { RecipesContent } from '@/components/sections';

export default async function RecipesPage() {
  const { results: cards } = await apiGetRecipes();

  return <RecipesContent recipes={cards} title={'Рецепты'} />;
}
