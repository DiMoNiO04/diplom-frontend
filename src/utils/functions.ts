import { notFound } from 'next/navigation';

import { IRecipe } from '@/utils/interfaces';

const splitBySemicolon = (text: string) => text.split(';').map((item) => item.trim());

async function fetchByKey<T>(dataArray: T[], key: keyof T, value: string): Promise<T> {
  const item = dataArray.find((entry) => String(entry[key]) === value);
  if (!item) notFound();
  return item;
}

const PER_PAGE_RECIPES = 4;

const getSimilarRecipes = (recipes: IRecipe[], idRecipe: number, category: string): IRecipe[] => {
  const sameCategory = recipes
    .filter((recipe) => recipe.id !== idRecipe && recipe.category === category)
    .slice(0, PER_PAGE_RECIPES);

  if (sameCategory.length === PER_PAGE_RECIPES) {
    return sameCategory;
  }

  const additional = recipes
    .filter((recipe) => recipe.id !== idRecipe && recipe.category !== category)
    .slice(0, PER_PAGE_RECIPES - sameCategory.length);

  return [...sameCategory, ...additional];
};

export { fetchByKey, getSimilarRecipes, splitBySemicolon };
