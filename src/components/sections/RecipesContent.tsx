'use client';

import clsx from 'clsx';

import { sortRecipes } from '@/data';
import { IRecipe, ISelectOption } from '@/utils/interfaces';

import { CardsItems, LoadMoreRecipes } from '../blocks';
import { Title } from '../ui';
import { Select } from '../ui/selects';

const RECIPES_PER_PAGE: number = 16;

type IRecipesContentProps = {
  recipes: IRecipe[];
  description?: string;
  name: string;
};

export const RecipesContent = ({ recipes, description, name }: IRecipesContentProps) => {
  const hasRecipes: boolean = recipes.length > 0;
  const initialRecipes = recipes.slice(0, RECIPES_PER_PAGE);
  const remainingRecipes = recipes.slice(RECIPES_PER_PAGE);

  const onChangeSelect = (value: ISelectOption) => alert(`Выбрана сортировка ${value.value}`);

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
            className="w-52 max-md:w-full"
          />
        </div>
        <CardsItems type="recipe" cards={initialRecipes} nothingMsg={'Рецептов данной категории нет'} />
        <LoadMoreRecipes remainingCards={remainingRecipes} perPage={RECIPES_PER_PAGE} />
      </div>
    </section>
  );
};
