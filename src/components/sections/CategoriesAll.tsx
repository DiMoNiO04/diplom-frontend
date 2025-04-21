'use client';

import { ChangeEvent, useState } from 'react';

import { useDebounce } from '@/hooks';
import { ICategory } from '@/utils/interfaces';

import { CardsItems, SearchHeaderBlock } from '../blocks';

interface ICategoriesAllProps {
  title: string;
  cards: ICategory[];
}

const DELAY_DEBOUNCE: number = 300;

export const CategoriesAll = ({ title, cards }: ICategoriesAllProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { debouncedValue } = useDebounce({ value: searchQuery, delay: DELAY_DEBOUNCE });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value);
  const handleClearSearch = () => setSearchQuery('');

  const filteredCategories = cards.filter((category) =>
    category.title.toLowerCase().includes(debouncedValue.toLowerCase())
  );

  return (
    <section className="my-20 max-lg:my-16">
      <div className="custom-container">
        <SearchHeaderBlock
          title={title}
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
