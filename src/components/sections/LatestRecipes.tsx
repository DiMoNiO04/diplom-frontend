import { recipesData } from '@/data';
import { EUrls } from '@/utils/urls';

import { CardsItems, TitleSectionBlock } from '../blocks';
import { LoadMoreRecipes } from '../blocks/LoadMoreRecipes';

const RECIPES_PER_PAGE: number = 8;

export const LatestRecipes = () => {
  const initialRecipes = recipesData.slice(0, RECIPES_PER_PAGE);
  const remainingRecipes = recipesData.slice(RECIPES_PER_PAGE);

  return (
    <section className="mb-20 max-lg:mb-16">
      <div className="custom-container">
        <TitleSectionBlock title="Последние рецепты" linkUrl={EUrls.RECIPES} />
        <CardsItems type="recipe" cards={initialRecipes} nothingMsg="Рецептов на данный момент нет!" />
        <LoadMoreRecipes remainingCards={remainingRecipes} perPage={RECIPES_PER_PAGE} />
      </div>
    </section>
  );
};
