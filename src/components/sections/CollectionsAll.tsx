'use client';

import { ChangeEvent, useState } from 'react';

import { collectionsData } from '@/data';
import { useDebounce } from '@/hooks';

import { CardsItems, LoadMoreCollections } from '../blocks';
import { IconClose } from '../icons';
import { Title } from '../ui';

const RECIPES_PER_PAGE: number = 15;
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
    <section className="my-20">
      <div className="custom-container">
        <div className="flex justify-between items-end mb-16 border-b border-gray-300">
          <Title title={'Коллекции'} className="pb-8" />
          <div className="relative w-64 flex items-center justify-between gap-x-4 pb-4">
            <input
              type="text"
              placeholder="Поиск коллекций..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="text-black placeholder:text-lightGrey box-border text-left w-full "
            />
            {searchQuery && (
              <button type="button" className="hover:text-black group" onClick={handleClearSearch}>
                <IconClose size={16} className="group-hover:stroke-greyLight transition-colors" />
              </button>
            )}
          </div>
        </div>
        <CardsItems type="collection" cards={initialCollections} nothingMsg="Ничего не найдено" />
        <LoadMoreCollections remainingCollections={remainingCollections} perPage={RECIPES_PER_PAGE} />
      </div>
    </section>
  );
};
