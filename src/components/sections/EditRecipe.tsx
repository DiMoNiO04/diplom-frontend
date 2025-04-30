'use client';

import { IRecipe } from '@/utils/interfaces';

import { FormRecipeUpdate } from '../forms';
import { Title } from '../ui';

export const EditRecipe = (recipe: IRecipe) => {
  return (
    <section className="my-12 mb-20 max-lg:mb-16 max-lg:my-12">
      <div className="custom-container">
        <Title title={'Обновление рецепта'} isBorder />
        <FormRecipeUpdate defaultValues={recipe} />
      </div>
    </section>
  );
};
