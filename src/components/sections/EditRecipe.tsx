'use client';

import { ICategoriesAndRecipeEdit } from '@/utils/interfaces';

import { FormRecipeUpdate } from '../forms';
import { Title } from '../ui';

export const EditRecipe = ({ recipe, categories, idRecipe }: ICategoriesAndRecipeEdit) => {
  return (
    <section className="my-12 mb-20 max-lg:mb-16 max-lg:my-12">
      <div className="custom-container">
        <Title title={`Редактирование рецепта "${recipe.title}"`} isBorder />
        <FormRecipeUpdate idRecipe={idRecipe} recipe={recipe} categories={categories} />
      </div>
    </section>
  );
};
