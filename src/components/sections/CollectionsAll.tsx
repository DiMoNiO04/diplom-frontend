'use client';

import { useSearch } from '@/hooks';
import { PER_PAGE_RECIPES } from '@/utils/consts';
import { ICollection } from '@/utils/interfaces';

import { CardsItems, LoadMoreCollections, SearchHeaderBlock } from '../blocks';

interface ICollectionsAllProps {
  cards: ICollection[];
}

export const CollectionsAll = ({ cards }: ICollectionsAllProps) => {
  const { searchQuery, filteredData, handleSearchChange, handleClearSearch } = useSearch<ICollection>({
    data: cards,
    filterKey: 'title',
  });

  const initialCollections = filteredData.slice(0, PER_PAGE_RECIPES);
  const remainingCollections = filteredData.slice(PER_PAGE_RECIPES);

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
        <LoadMoreCollections remainingCards={remainingCollections} perPage={PER_PAGE_RECIPES} />
      </div>
    </section>
  );
};
