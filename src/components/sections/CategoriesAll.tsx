'use client';

import { ChangeEvent, useState } from 'react';

import { useDebounce } from '@/hooks';
import { ICategory } from '@/utils/interfaces';

import { CardsItems, SearchHeaderBlock } from '../blocks';

interface ICategoriesAllProps {
  cards: ICategory[];
}

const DELAY_DEBOUNCE: number = 300;

export const CategoriesAll = ({ cards }: ICategoriesAllProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { debouncedValue } = useDebounce({ value: searchQuery, delay: DELAY_DEBOUNCE });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value);
  const handleClearSearch = () => setSearchQuery('');

  const filteredCategories = cards.filter((category) =>
    category.title.toLowerCase().includes(debouncedValue.toLowerCase())
  );

  return (
    <section className="my-12 mb-20 max-lg:mb-16 max-lg:my-12">
      <div className="custom-container">
        <SearchHeaderBlock
          title={'Категории'}
          placeholder={'Поиск категорий...'}
          value={searchQuery}
          isVisibleSearch={cards.length > 0}
          onChange={handleSearchChange}
          onClear={handleClearSearch}
        />
        <CardsItems type="category" cards={filteredCategories} nothingMsg={'Категорий не найдено!'} />
      </div>
    </section>
  );
};
