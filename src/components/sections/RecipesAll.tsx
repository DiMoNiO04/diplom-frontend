'use client';

import clsx from 'clsx';

import { sortRecipes } from '@/data';
import { IRecipe, ISelectOption } from '@/utils/interfaces';

import { CardsItems, LoadMoreRecipes } from '../blocks';
import { Title } from '../ui';
import { Select } from '../ui/selects';

const RECIPES_PER_PAGE: number = 16;

type IRecipesAllProps = {
  recipes: IRecipe[];
  description?: string;
  name: string;
};

export const RecipesAll = ({ recipes, description, name }: IRecipesAllProps) => {
  const hasRecipes: boolean = recipes.length > 0;
  const initialRecipes = recipes.slice(0, RECIPES_PER_PAGE);
  const remainingRecipes = recipes.slice(RECIPES_PER_PAGE);

  const onChangeSelect = (value: ISelectOption) => alert(`Выбрана сортировка ${value.value}`);

  return (
    <section className="my-20 max-lg:my-16">
      <div className="custom-container">
        <div
          className={clsx(
            'flex justify-between items-end mb-16 pb-8 border-b border-gray-300',
            'max-sm:flex-col max-sm:mb-12 max-sm:justify-start max-sm:items-start max-sm:gap-8'
          )}
        >
          <div className="flex flex-col gap-2 max-w-3xl">
            <div className="flex items-end gap-4">
              <Title title={name} />
              {hasRecipes && (
                <div className="font-onest italic text-sm flex-shrink-0 text-balance">
                  {recipes.length} рецепта(-ов)
                </div>
              )}
            </div>
            {description && <p className="text-lg text-greyLight">{description}</p>}
          </div>
          <Select
            onChange={onChangeSelect}
            value={sortRecipes[0]}
            options={sortRecipes}
            className="w-52 max-sm:w-full"
          />
        </div>
        <CardsItems type="recipe" cards={initialRecipes} nothingMsg={'Рецептов данной категории нет'} />
        <LoadMoreRecipes remainingCards={remainingRecipes} perPage={RECIPES_PER_PAGE} />
      </div>
    </section>
  );
};
