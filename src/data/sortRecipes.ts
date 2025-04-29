import { ISelectOption } from '@/utils/interfaces';

export const ESortRecipes = {
  NEWEST: 0,
  OLDEST: 1,
  ALPHABETICAL_A_Z: 2,
  ALPHABETICAL_Z_A: 3,
  COOKING_TIME_MIN: 4,
  COOKING_TIME_MAX: 5,
  CALORIES_MIN: 6,
  CALORIES_MAX: 7,
} as const;

export type ESortRecipes = (typeof ESortRecipes)[keyof typeof ESortRecipes];

export const sortRecipes: ISelectOption[] = [
  { value: ESortRecipes.NEWEST, text: 'Дата (новые)' },
  { value: ESortRecipes.OLDEST, text: 'Дата (старые)' },
  { value: ESortRecipes.ALPHABETICAL_A_Z, text: 'Название (А–Я)' },
  { value: ESortRecipes.ALPHABETICAL_Z_A, text: 'Название (Я–А)' },
  { value: ESortRecipes.COOKING_TIME_MIN, text: 'Время (мин)' },
  { value: ESortRecipes.COOKING_TIME_MAX, text: 'Время (макс)' },
  { value: ESortRecipes.CALORIES_MIN, text: 'Калории (мин)' },
  { value: ESortRecipes.CALORIES_MAX, text: 'Калории (макс)' },
];
