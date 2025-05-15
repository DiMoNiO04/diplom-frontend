import { EMsgActions } from '@/actions/utils';
import { ICategory, IRecipe, IReview } from '@/utils/interfaces';

import { STRAPI_URL } from './consts';

const PER_PAGE_RECIPES = 4;

const splitBySemicolon = (text: string) =>
  text
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item !== '');

const getTrimmedPathname = (pathname: string) => (pathname.endsWith('/') ? pathname.slice(0, -1) : pathname);
const getImageUrl = (url: string) => `${url}`;

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

const isNewRecipe = (createdAt: string) => {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const diffInMs = now.getTime() - createdDate.getTime();
  const threeDaysInMs = 2 * 24 * 60 * 60 * 1000;
  return diffInMs < threeDaysInMs;
};

const getDate = (dateStr: string) => {
  const inputDate = new Date(dateStr);
  const today = new Date();
  const tomorrow = new Date();

  today.setHours(0, 0, 0, 0);
  tomorrow.setDate(today.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  inputDate.setHours(0, 0, 0, 0);

  if (inputDate.getTime() === today.getTime()) {
    return 'Сегодня';
  }

  if (inputDate.getTime() === tomorrow.getTime()) {
    return 'Завтра';
  }

  return inputDate.toLocaleDateString('ru-RU');
};

const getPercentMakeAgain = (reviews: IReview[]): number => {
  if (!reviews || reviews.length === 0) return 0;

  const yesCount = reviews.filter((r) => r.reviewType === 'yes').length;
  return Math.round((yesCount / reviews.length) * 100);
};

const getRating = (percentMakeAgain: number): number => {
  const maxPercentMakeAgain: number = 100;
  const maxRating: number = 5;

  return (percentMakeAgain * maxRating) / maxPercentMakeAgain;
};

export {
  getDate,
  getFailedMsg,
  getImageUrl,
  getPercentMakeAgain,
  getRating,
  getSimilarRecipes,
  getSortedRecipesForCreated,
  getTrimmedPathname,
  isNewRecipe,
  splitBySemicolon,
};
