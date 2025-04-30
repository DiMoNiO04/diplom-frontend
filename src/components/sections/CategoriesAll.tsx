'use client';

import { useSearch } from '@/hooks';
import { ICategory } from '@/utils/interfaces';

import { CardsItems, SearchHeaderBlock } from '../blocks';

interface ICategoriesAllProps {
  cards: ICategory[];
}

export const CategoriesAll = ({ cards }: ICategoriesAllProps) => {
  const { searchQuery, filteredData, handleSearchChange, handleClearSearch } = useSearch<ICategory>({
    data: cards,
    filterKey: 'title',
  });

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
        <CardsItems type="category" cards={filteredData} nothingMsg={'Категорий не найдено!'} />
      </div>
    </section>
  );
};
