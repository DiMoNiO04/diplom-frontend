'use client';

import { ChangeEvent, useState } from 'react';

import { useDebounce } from '@/hooks';
import { ICollection, IHeaderSearchBlockPage } from '@/utils/interfaces';

import { CardsItems, LoadMoreCollections, SearchHeaderBlock } from '../blocks';

const RECIPES_PER_PAGE: number = 18;
const DELAY_DEBOUNCE: number = 300;

interface ICollectionsAllProps extends IHeaderSearchBlockPage {
  cards: ICollection[];
}

export const CollectionsAll = ({ title, search, nothingText, cards }: ICollectionsAllProps) => {
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
    <section className="my-20 max-lg:my-16">
      <div className="custom-container">
        <SearchHeaderBlock
          title={title}
          placeholder={search}
          value={searchQuery}
          isVisibleSearch={cards.length > 0}
          onChange={handleSearchChange}
          onClear={handleClearSearch}
        />
        <CardsItems type="collection" cards={initialCollections} nothingMsg={nothingText} />
        <LoadMoreCollections remainingCards={remainingCollections} perPage={RECIPES_PER_PAGE} />
      </div>
    </section>
  );
};
