'use client';

import { ChangeEvent, useState } from 'react';

import { useDebounce } from '@/hooks';
import { ICollection } from '@/utils/interfaces';

import { CardsItems, LoadMoreCollections, SearchHeaderBlock } from '../blocks';

const RECIPES_PER_PAGE: number = 18;
const DELAY_DEBOUNCE: number = 300;

interface ICollectionsAllProps {
  cards: ICollection[];
}

export const CollectionsAll = ({ cards }: ICollectionsAllProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { debouncedValue } = useDebounce({ value: searchQuery, delay: DELAY_DEBOUNCE });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value);
  const handleClearSearch = () => setSearchQuery('');

  const filteredCollections = cards.filter((collection) =>
    collection.title.toLowerCase().includes(debouncedValue.toLowerCase())
  );
  const initialCollections = filteredCollections.slice(0, RECIPES_PER_PAGE);
  const remainingCollections = filteredCollections.slice(RECIPES_PER_PAGE);

  return (
    <section className="my-12 mb-20 max-lg:mb-16 max-lg:my-12">
      <div className="custom-container">
        <SearchHeaderBlock
          title={'Коллекции'}
          placeholder={'Поиск коллекций...'}
          value={searchQuery}
          isVisibleSearch={cards.length > 0}
          onChange={handleSearchChange}
          onClear={handleClearSearch}
        />
        <CardsItems type="collection" cards={initialCollections} nothingMsg={'Коллекций не найдено!'} />
        <LoadMoreCollections remainingCards={remainingCollections} perPage={RECIPES_PER_PAGE} />
      </div>
    </section>
  );
};
