'use client';

import { ChangeEvent, useState } from 'react';

import { categoriesData } from '@/data';
import { useDebounce } from '@/hooks';

import { CardsItems, SearchInputBlock } from '../blocks';
import { Title } from '../ui';

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
    <section className="mb-20 max-lg:my-16">
      <div className="custom-container">
        <div className="flex justify-between items-end mb-16 border-b border-gray-300">
          <Title title={'Категории'} className="pb-8" />
          <SearchInputBlock
            placeholder="Поиск категорий..."
            value={searchQuery}
            onChange={handleSearchChange}
            onClear={handleClearSearch}
          />
        </div>
        <CardsItems type="category" cards={filteredCategories} nothingMsg="Категорий нет!" />
      </div>
    </section>
  );
};
