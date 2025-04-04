'use client';

import { FormRecipe } from '../forms';
import { Title } from '../ui';

export const NewRecipe = () => {
  return (
    <section className="my-20">
      <div className="custom-container">
        <Title title="Добавление нового рецепта" isBorder />
        <FormRecipe actionType="create" />
      </div>
    </section>
  );
};
