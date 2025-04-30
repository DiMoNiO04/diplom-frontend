'use client';

import { useSearch } from '@/hooks';
import { ICollection } from '@/utils/interfaces';

import { CardsItems, LoadMoreCollections, SearchHeaderBlock } from '../blocks';

const RECIPES_PER_PAGE: number = 18;

interface ICollectionsAllProps {
  cards: ICollection[];
}

export const CollectionsAll = ({ cards }: ICollectionsAllProps) => {
  const { searchQuery, filteredData, handleSearchChange, handleClearSearch } = useSearch<ICollection>({
    data: cards,
    filterKey: 'title',
  });

  const initialCollections = filteredData.slice(0, RECIPES_PER_PAGE);
  const remainingCollections = filteredData.slice(RECIPES_PER_PAGE);

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
