'use client';

import { IRecipe } from '@/utils/interfaces';

import { FormRecipeUpdate } from '../forms';
import { Title } from '../ui';

export const Editecipe = (recipe: IRecipe) => {
  return (
    <section className="my-20 max-lg:my-16">
      <div className="custom-container">
        <Title title={'Обновление рецепта'} isBorder />
        <FormRecipeUpdate defaultValues={recipe} />
      </div>
    </section>
  );
};
