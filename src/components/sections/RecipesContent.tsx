'use client';

import clsx from 'clsx';

import { ESortRecipes, sortRecipes } from '@/data';
import { useSortRecipes } from '@/hooks';
import { PER_PAGE_RECIPES } from '@/utils/consts';
import { IRecipe } from '@/utils/interfaces';

import { CardsItems, LoadMoreRecipes } from '../blocks';
import { Title } from '../ui';
import { Select } from '../ui/selects';

interface IRecipesContentProps {
  recipes: IRecipe[];
  description?: string;
  title: string;
}

export const RecipesContent = ({ recipes, description, title }: IRecipesContentProps) => {
  const hasRecipes: boolean = recipes && recipes.length > 0;
  const { sortedRecipes, selectedSortOption, onChangeSelect } = useSortRecipes(
    recipes,
    sortRecipes[ESortRecipes.NEWEST]
  );

  const initialRecipes = hasRecipes ? sortedRecipes.slice(0, PER_PAGE_RECIPES) : [];
  const remainingRecipes = hasRecipes ? sortedRecipes.slice(PER_PAGE_RECIPES) : [];

  return (
    <section className="my-12 max-lg:mи-10">
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
          {hasRecipes && recipes.length > 1 && (
            <Select
              onChange={onChangeSelect}
              value={selectedSortOption}
              options={sortRecipes}
              className="w-52 max-md:w-full"
            />
          )}
        </div>
        <CardsItems type="recipe" cards={initialRecipes} nothingMsg={'Рецептов не найдено!'} />
        <LoadMoreRecipes remainingCards={remainingRecipes} perPage={PER_PAGE_RECIPES} />
      </div>
    </section>
  );
};
