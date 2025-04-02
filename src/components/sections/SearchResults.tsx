'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

import { recipesData, sortRecipes } from '@/data';
import { ISelectOption } from '@/utils/interfaces';

import { CardsItems, LoadMoreRecipes } from '../blocks';
import { CloseIcon } from '../icons';
import { Title } from '../ui';
import { Select } from '../ui/selects/Select';

const RECIPES_PER_PAGE: number = 20;

export const SearchResults = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const queryFromURL = searchParams.get('query') || '';
  const [searchQuery, setSearchQuery] = useState<string>(queryFromURL);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);

    const newURL = newQuery ? `/search?query=${encodeURIComponent(newQuery)}` : '/search';
    router.push(newURL, { scroll: false });
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    router.push('/search', { scroll: false });
  };

  const onChangeSelect = (value: ISelectOption) => alert(`Выбрана сортировка ${value.value}`);

  const initialRecipes = recipesData.slice(0, RECIPES_PER_PAGE);
  const remainingRecipes = recipesData.slice(RECIPES_PER_PAGE);

  return (
    <section className="my-20">
      <div className="custom-container">
        <Title title="Результаты поиска" className="mb-8" />
        <div className="relative w-full flex items-center justify-between gap-x-4 pb-4 mb-8 border-b border-greyLight">
          <input
            type="text"
            placeholder="Поиск рецептов по названию..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="text-black placeholder:text-lightGrey box-border text-left w-full"
          />
          {searchQuery && (
            <button type="button" className="hover:text-black group" onClick={handleClearSearch}>
              <CloseIcon size={16} className="group-hover:stroke-greyLight transition-colors" />
            </button>
          )}
        </div>
        <div className="flex items-center justify-between mb-10">
          <div className="font-unbounded italic text-greyLight">
            По вашему запросу <span className="text-orange">{searchQuery}</span> найдено{' '}
            <span className="text-orange">{recipesData.length}</span> рецепта(-ов)
          </div>
          <Select onChange={onChangeSelect} value={sortRecipes[0]} options={sortRecipes} className="w-52" />
        </div>

        <CardsItems type="recipe" cards={initialRecipes} nothingMsg={'По вашему запросу ничего не найдено'} />
        <LoadMoreRecipes remainingRecipes={remainingRecipes} perPage={RECIPES_PER_PAGE} />
      </div>
    </section>
  );
};
