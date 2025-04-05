import { recipesData } from '@/data';
import { getSimilarRecipes } from '@/utils/functions';

import { CardsItems, TitleSectionBlock } from '../blocks';

interface IAlsoLikeProps {
  idRecipe: number;
  category: string;
}

export const AlsoLike = ({ idRecipe, category }: IAlsoLikeProps) => {
  const filteredRecipes = getSimilarRecipes(recipesData, idRecipe, category);

  if (filteredRecipes.length === 0) return null;

  return (
    <section className="mb-16">
      <div className="custom-container">
        <TitleSectionBlock title="Вам также может понравиться" />
        <CardsItems cards={filteredRecipes} type="recipe" nothingMsg="Ничего не найдено" />
      </div>
    </section>
  );
};
