'use client';

import { FormRecipeCreate } from '../forms';
import { Title } from '../ui';

export const NewRecipe = () => {
  return (
    <section className="my-12 mb-20 max-lg:mb-16 max-lg:my-12">
      <div className="custom-container">
        <Title title="Добавление нового рецепта" isBorder />
        <FormRecipeCreate />
      </div>
    </section>
  );
};
