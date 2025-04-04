'use client';

import { FormRecipeCreate } from '../forms';
import { Title } from '../ui';

export const NewRecipe = () => {
  return (
    <section className="my-20">
      <div className="custom-container">
        <Title title="Добавление нового рецепта" isBorder />
        <FormRecipeCreate />
      </div>
    </section>
  );
};
