'use client';

import { sortRecipes } from '@/data';
import { IRecipe, ISelectOption } from '@/utils/interfaces';

import { CardsItems, LoadMoreRecipes } from '../blocks';
import { Title } from '../ui';
import { Select } from '../ui/selects/Select';

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
    <section className="mb-20 mt-20">
      <div className="custom-container">
        <div className="flex justify-between items-end mb-12">
          <div className="flex flex-col gap-y-2 max-w-3xl">
            <div className="flex items-end gap-x-4">
              <Title title={name} />
              {hasRecipes && (
                <div className="font-onest italic text-sm flex-shrink-0 text-balance">
                  {recipes.length} рецепта(-ов)
                </div>
              )}
            </div>
            {description && <p className="text-lg text-greyLight">{description}</p>}
          </div>
          <Select onChange={onChangeSelect} value={sortRecipes[0]} options={sortRecipes} className="w-52" />
        </div>
        <CardsItems type="recipe" cards={initialRecipes} nothingMsg={'Рецептов данной категории нет'} />
        <LoadMoreRecipes remainingRecipes={remainingRecipes} perPage={RECIPES_PER_PAGE} />
      </div>
    </section>
  );
};
