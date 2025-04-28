import { notFound } from 'next/navigation';

import { EMsgActions } from '@/actions/utils';
import { IRecipe } from '@/utils/interfaces';

import { STRAPI_URL } from './consts';

const splitBySemicolon = (text: string) => text.split(';').map((item) => item.trim());
const getTrimmedPathname = (pathname: string) => (pathname.endsWith('/') ? pathname.slice(0, -1) : pathname);
const getImageUrl = (url: string) => `${STRAPI_URL}${url}`;

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
  fetchByKey,
  getFailedMsg,
  getImageUrl,
  getSimilarRecipes,
  getSortedRecipesForCreated,
  getTrimmedPathname,
  splitBySemicolon,
};
