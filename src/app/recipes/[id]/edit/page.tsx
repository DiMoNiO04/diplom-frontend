import { notFound } from 'next/navigation';

import { Editecipe } from '@/components/sections';
import { recipesData } from '@/data';
import { IRecipe } from '@/utils/interfaces';

async function getRecipeBySlug(id: string): Promise<IRecipe | null> {
  return recipesData.find((recipe) => String(recipe.id) === id) || null;
}

async function fetchRecipe(params: { id: string }): Promise<IRecipe> {
  const { id } = params;
  const recipeData = await getRecipeBySlug(id);

  if (!recipeData) {
    notFound();
  }

  return recipeData;
}

interface IRecipePageProps {
  params: Promise<{ id: string }>;
}

export default async function EditRecipePage({ params }: IRecipePageProps) {
  const recipe: IRecipe = await fetchRecipe(await params);

  return (
    <>
      <Editecipe {...recipe} />
    </>
  );
}
