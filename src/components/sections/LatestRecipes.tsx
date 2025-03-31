import { recipesData } from '@/data';
import { EUrls } from '@/utils/urls';

import { TitleSectionBlock } from '../blocks';
import { CardsListRecipes } from '../blocks/cardsList';
import { LoadMoreRecipes } from '../blocks/LoadMoreRecipes';

const RECIPES_PER_PAGE: number = 8;

export const LatestRecipes = () => {
  const initialRecipes = recipesData.slice(0, RECIPES_PER_PAGE);
  const remainingRecipes = recipesData.slice(RECIPES_PER_PAGE);

  return (
    <section className="mb-24">
      <div className="custom-container">
        <TitleSectionBlock title="Последние рецепты" linkUrl={EUrls.RECIPES} />
        <CardsListRecipes cards={initialRecipes} nothingMsg="Рецептов на данный момент нет!" />
        <LoadMoreRecipes remainingRecipes={remainingRecipes} perPage={RECIPES_PER_PAGE} />
      </div>
    </section>
  );
};
