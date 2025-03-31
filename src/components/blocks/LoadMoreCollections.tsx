'use client';

import { useState } from 'react';

import { ICollection } from '@/utils/interfaces';

import { Button } from '../ui';
import { CardsItems } from './CardsItems';

interface ILoadMoreRecipesProps {
  remainingCollections: ICollection[];
  perPage: number;
}

export const LoadMoreCollections = ({ remainingCollections, perPage }: ILoadMoreRecipesProps) => {
  const [visibleCount, setVisibleCount] = useState<number>(0);

  const handleLoadMore = () => setVisibleCount((prev) => prev + perPage);

  const visibleCollections: ICollection[] = remainingCollections.slice(0, visibleCount);
  const hasMore: boolean = visibleCount < remainingCollections.length;
  const hasCollections: boolean = visibleCount !== 0;

  return (
    <>
      {hasCollections && (
        <CardsItems type="collection" cards={visibleCollections} nothingMsg="Коллекций в данный момент нет" />
      )}
      {hasMore && (
        <div className="w-full flex items-center justify-center">
          <Button text="Загрузить еще" onClick={handleLoadMore} />
        </div>
      )}
    </>
  );
};
