import { ISelectOption } from '@/utils/interfaces';

export const sortRecipes: ISelectOption[] = [
  { value: 1, text: 'Название (А–Я)' },
  { value: 2, text: 'Название (Я–А)' },
  { value: 3, text: 'Дата (новые)' },
  { value: 4, text: 'Дата (старые)' },
  { value: 5, text: 'Время (мин)' },
  { value: 6, text: 'Время (макс)' },
  { value: 7, text: 'Калории (мин)' },
  { value: 8, text: 'Калории (макс)' },
];
