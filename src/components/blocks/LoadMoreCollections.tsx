'use client';

import { useState } from 'react';

import { ICollection, ILoadMoreProps } from '@/utils/interfaces';

import { BtnLoadMore } from '../ui/btns';
import { CardsItems } from './CardsItems';

export const LoadMoreCollections = ({ remainingCards, perPage }: ILoadMoreProps<ICollection>) => {
  const [visibleCount, setVisibleCount] = useState<number>(0);

  const handleLoadMore = () => setVisibleCount((prev) => prev + perPage);

  const visibleCollections: ICollection[] = remainingCards.slice(0, visibleCount);
  const hasMore: boolean = visibleCount < remainingCards.length;
  const hasCollections: boolean = visibleCount !== 0;

  return (
    <>
      {hasCollections && (
        <CardsItems type="collection" cards={visibleCollections} nothingMsg="Коллекций в данный момент нет" />
      )}
      {hasMore && <BtnLoadMore onClick={handleLoadMore} />}
    </>
  );
};
