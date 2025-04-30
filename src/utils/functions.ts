import { EMsgActions } from '@/actions/utils';
import { ICategory, IRecipe } from '@/utils/interfaces';

import { STRAPI_URL } from './consts';

const PER_PAGE_RECIPES = 4;

const splitBySemicolon = (text: string) =>
  text
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item !== '');

const getTrimmedPathname = (pathname: string) => (pathname.endsWith('/') ? pathname.slice(0, -1) : pathname);
const getImageUrl = (url: string) => `${STRAPI_URL}${url}`;

const getSimilarRecipes = (recipes: IRecipe[], idRecipe: string, categories: ICategory[]): IRecipe[] => {
  const recipeCategories = categories.map((category) => category.slug);

  const sameCategory = recipes
    .filter(
      (recipe) =>
        recipe.documentId !== idRecipe && recipe.categories.some((category) => recipeCategories.includes(category.slug))
    )
    .slice(0, PER_PAGE_RECIPES);

  if (sameCategory.length === PER_PAGE_RECIPES) {
    return sameCategory;
  }

  const additional = recipes
    .filter(
      (recipe) =>
        recipe.documentId !== idRecipe &&
        !recipe.categories.some((category) => recipeCategories.includes(category.slug))
    )
    .slice(0, PER_PAGE_RECIPES - sameCategory.length);

  return [...sameCategory, ...additional];
};

const getFailedMsg = (message: string): string => {
  if (message === 'Invalid identifier or password') {
    message = EMsgActions.FAILED_LOGIN;
  } else if (message === 'Your account email is not confirmed') {
    message = EMsgActions.NO_CONFIRM_ACC;
  } else if (message === 'Your account has been blocked by an administrator') {
    message = EMsgActions.BLOCKED_ACC;
  } else if (message === 'Email or Username are already taken') {
    message = EMsgActions.FAILED_REG;
  } else if (message === 'The provided current password is invalid') {
    message = EMsgActions.FAILED_CURRENT_PASSWORD;
  }

  return message;
};

const getSortedRecipesForCreated = (cards: IRecipe[]) =>
  cards.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

export {
  getFailedMsg,
  getImageUrl,
  getSimilarRecipes,
  getSortedRecipesForCreated,
  getTrimmedPathname,
  splitBySemicolon,
};
