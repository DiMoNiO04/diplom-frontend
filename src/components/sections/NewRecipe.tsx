'use client';

import { ICategoriesAndCollectionsProps } from '@/utils/interfaces';

import { FormRecipeCreate } from '../forms';
import { Title } from '../ui';

export const NewRecipe = ({ categories, collections }: ICategoriesAndCollectionsProps) => {
  return (
    <section className="my-12 mb-20 max-lg:mb-16 max-lg:my-12">
      <div className="custom-container">
        <Title title="Добавление нового рецепта" isBorder />
        <FormRecipeCreate categories={categories} collections={collections} />
      </div>
    </section>
  );
};
