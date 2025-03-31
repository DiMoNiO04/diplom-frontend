'use client';

import { sortRecipes } from '@/data';
import { ICollection, ISelectOption } from '@/utils/interfaces';

import { LoadMoreRecipes } from '../blocks';
import { CardsListRecipes } from '../blocks/cardsList';
import { Select } from '../ui/selects/Select';

const RECIPES_PER_PAGE: number = 16;

export const CollectionContent = ({ recipes, description, name }: Omit<ICollection, 'slug' | 'img'>) => {
  const hasRecipes: boolean = recipes.length > 0;
  const initialRecipes = recipes.slice(0, RECIPES_PER_PAGE);
  const remainingRecipes = recipes.slice(RECIPES_PER_PAGE);

  const onChangeSelect = (value: ISelectOption) => alert(`Выбрана сортировка ${value.value}`);

  return (
    <section className="mb-24 mt-16">
      <div className="custom-container">
        <div className="flex justify-between items-end mb-12">
          <div className="flex flex-col gap-y-2 max-w-2xl">
            <div className="flex items-end gap-x-4">
              <h1 className="font-unbounded text-4xl">Коллекция: {name}</h1>
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
        <CardsListRecipes cards={initialRecipes} nothingMsg={'Рецептов данной категории нет'} />
        <LoadMoreRecipes remainingRecipes={remainingRecipes} perPage={RECIPES_PER_PAGE} />
      </div>
    </section>
  );
};
