'use client';

import clsx from 'clsx';

import { ESortRecipes, sortRecipes } from '@/data';
import { useSortRecipes } from '@/hooks';
import { IHeaderSearchBlockPage, IRecipe } from '@/utils/interfaces';

import { CardsItems, LoadMoreRecipes } from '../blocks';
import { Title } from '../ui';
import { Select } from '../ui/selects';

const RECIPES_PER_PAGE: number = 16;

interface IRecipesContentProps extends IHeaderSearchBlockPage {
  recipes: IRecipe[];
  description?: string;
}

export const RecipesContent = ({ recipes, description, title, nothingText }: IRecipesContentProps) => {
  const hasRecipes: boolean = recipes && recipes.length > 0;
  const { sortedRecipes, selectedSortOption, onChangeSelect } = useSortRecipes(
    recipes,
    sortRecipes[ESortRecipes.NEWEST]
  );

  const initialRecipes = hasRecipes ? sortedRecipes.slice(0, RECIPES_PER_PAGE) : [];
  const remainingRecipes = hasRecipes ? sortedRecipes.slice(RECIPES_PER_PAGE) : [];

  return (
    <section className="my-20 max-lg:my-16">
      <div className="custom-container">
        <div
          className={clsx(
            'flex justify-between items-end mb-16 pb-8 border-b border-gray-300 gap-8',
            'max-md:flex-col max-md:mb-12 max-md:justify-start max-md:items-start max-md:gap-8'
          )}
        >
          <div className="flex flex-col gap-2 max-w-3xl">
            <div className="flex items-end gap-4 max-lg:flex-col max-lg:items-start">
              <Title title={title} />
              <div className="font-onest italic text-sm flex-shrink-0 text-balance">
                {hasRecipes ? `${recipes.length} рецепта(-ов)` : '0 рецептов'}
              </div>
            </div>
            {description && <p className="text-lg text-greyLight">{description}</p>}
          </div>
          {hasRecipes && (
            <Select
              onChange={onChangeSelect}
              value={selectedSortOption}
              options={sortRecipes}
              className="w-52 max-md:w-full"
            />
          )}
        </div>
        <CardsItems type="recipe" cards={initialRecipes} nothingMsg={nothingText} />
        <LoadMoreRecipes remainingCards={remainingRecipes} perPage={RECIPES_PER_PAGE} />
      </div>
    </section>
  );
};
