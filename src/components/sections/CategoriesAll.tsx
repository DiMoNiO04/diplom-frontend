'use client';

import { ChangeEvent, useState } from 'react';

import { categoriesData } from '@/data';
import { useDebounce } from '@/hooks';

import { CardsItems, SearchHeaderBlock } from '../blocks';

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
    <section className="my-20 max-lg:my-16">
      <div className="custom-container">
        <SearchHeaderBlock
          title="Категории"
          placeholder="Поиск категорий..."
          value={searchQuery}
          onChange={handleSearchChange}
          onClear={handleClearSearch}
        />
        <CardsItems type="category" cards={filteredCategories} nothingMsg="Категорий нет!" />
      </div>
    </section>
  );
};
