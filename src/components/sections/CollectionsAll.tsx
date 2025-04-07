'use client';

import { ChangeEvent, useState } from 'react';

import { collectionsData } from '@/data';
import { useDebounce } from '@/hooks';

import { CardsItems, LoadMoreCollections, SearchHeaderBlock } from '../blocks';

const RECIPES_PER_PAGE: number = 18;
const DELAY_DEBOUNCE: number = 300;

export const CollectionsAll = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { debouncedValue } = useDebounce({ value: searchQuery, delay: DELAY_DEBOUNCE });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value);
  const handleClearSearch = () => setSearchQuery('');

  const filteredCollections = collectionsData.filter((collection) =>
    collection.name.toLowerCase().includes(debouncedValue.toLowerCase())
  );
  const initialCollections = filteredCollections.slice(0, RECIPES_PER_PAGE);
  const remainingCollections = filteredCollections.slice(RECIPES_PER_PAGE);

  return (
    <section className="mb-20 max-lg:my-16">
      <div className="custom-container">
        <SearchHeaderBlock
          title="Коллекции"
          placeholder="Поиск коллекций..."
          value={searchQuery}
          onChange={handleSearchChange}
          onClear={handleClearSearch}
        />
        <CardsItems type="collection" cards={initialCollections} nothingMsg="Ничего не найдено" />
        <LoadMoreCollections remainingCards={remainingCollections} perPage={RECIPES_PER_PAGE} />
      </div>
    </section>
  );
};
