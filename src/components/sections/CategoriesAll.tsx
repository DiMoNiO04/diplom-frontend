'use client';

import { ChangeEvent, useState } from 'react';

import { categoriesData } from '@/data';
import { useDebounce } from '@/hooks';

import { CardsItems } from '../blocks';
import { CloseIcon } from '../icons';

const DELAY_DEBOUNCE: number = 300;

export const CategoriesAll = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { debouncedValue } = useDebounce({ value: searchQuery, delay: DELAY_DEBOUNCE });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value);
  const handleClearSearch = () => setSearchQuery('');

  const filteredCategories = categoriesData.filter((collection) =>
    collection.name.toLowerCase().includes(debouncedValue.toLowerCase())
  );

  return (
    <section className="mb-24 mt-16">
      <div className="custom-container">
        <div className="flex justify-between items-end mb-16 border-b border-gray-300">
          <h1 className="font-unbounded text-4xl pb-8">Категории</h1>
          <div className="relative w-64 flex items-center justify-between gap-x-4 pb-4">
            <input
              type="text"
              placeholder="Поиск категорий..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="text-black placeholder:text-lightGrey box-border text-left w-full "
            />
            {searchQuery && (
              <button type="button" className="hover:text-black group" onClick={handleClearSearch}>
                <CloseIcon size={16} className="group-hover:stroke-greyLight transition-colors" />
              </button>
            )}
          </div>
        </div>
        <CardsItems type="category" cards={filteredCategories} nothingMsg="Категорий нет" />
      </div>
    </section>
  );
};
