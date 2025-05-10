'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';

import { ESortRecipes, sortRecipes } from '@/data';
import { useDebounce, useSortRecipes } from '@/hooks';
import { DELAY_DEBOUNCE } from '@/utils/consts';
import { IRecipesProps } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

import { CardsItems, LoadMoreRecipes } from '../blocks';
import { IconClose } from '../icons';
import { Title } from '../ui';
import { Select } from '../ui/selects';

const RECIPES_PER_PAGE = 20;

export const SearchResults = ({ recipes }: IRecipesProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const queryFromURL = searchParams.get('title') || '';
  const [searchQuery, setSearchQuery] = useState<string>(queryFromURL);

  const { debouncedValue: debouncedQuery } = useDebounce({ value: searchQuery, delay: DELAY_DEBOUNCE });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);

    const newURL = newQuery ? `${EUrls.SEARCH}?title=${encodeURIComponent(newQuery)}` : EUrls.SEARCH;
    router.push(newURL);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    router.push(EUrls.SEARCH);
  };

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => recipe.title.toLowerCase().includes(debouncedQuery.toLowerCase()));
  }, [recipes, debouncedQuery]);

  const { sortedRecipes, selectedSortOption, onChangeSelect } = useSortRecipes(
    filteredRecipes,
    sortRecipes[ESortRecipes.NEWEST]
  );

  const initialRecipes = sortedRecipes.slice(0, RECIPES_PER_PAGE);
  const remainingRecipes = sortedRecipes.slice(RECIPES_PER_PAGE);

  useEffect(() => {
    setSearchQuery(queryFromURL);
  }, [queryFromURL]);

  return (
    <section className="my-12 mb-20 max-lg:mb-16 max-lg:my-12">
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
              <IconClose size={16} className="group-hover:stroke-greyLight transition-colors" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between mb-10 max-md:flex-col max-md:gap-4 max-md:items-start">
          <div className="font-unbounded italic text-greyLight max-md:text-sm">
            По вашему запросу <span className="text-orange">{debouncedQuery}</span> найдено{' '}
            <span className="text-orange">{filteredRecipes.length}</span> рецепта(-ов)
          </div>
          {filteredRecipes.length > 1 && (
            <Select
              onChange={onChangeSelect}
              value={selectedSortOption}
              options={sortRecipes}
              className="w-52 max-md:w-full"
            />
          )}
        </div>

        <CardsItems type="recipe" cards={initialRecipes} nothingMsg="По вашему запросу ничего не найдено!" />
        {remainingRecipes.length > 0 && (
          <LoadMoreRecipes remainingCards={remainingRecipes} perPage={RECIPES_PER_PAGE} />
        )}
      </div>
    </section>
  );
};
