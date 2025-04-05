'use client';

import { useState } from 'react';

import { ILoadMoreProps, IRecipe } from '@/utils/interfaces';

import { BtnLoadMore } from '../ui/btns';
import { CardsItems } from './CardsItems';

export const LoadMoreRecipes = ({ remainingCards, perPage }: ILoadMoreProps<IRecipe>) => {
  const [visibleCount, setVisibleCount] = useState<number>(0);

  const handleLoadMore = () => setVisibleCount((prev) => prev + perPage);

  const visibleRecipes: IRecipe[] = remainingCards.slice(0, visibleCount);
  const hasMore: boolean = visibleCount < remainingCards.length;
  const hasRecipes: boolean = visibleCount !== 0;

  return (
    <>
      {hasRecipes && <CardsItems type="recipe" cards={visibleRecipes} nothingMsg="" />}
      {hasMore && <BtnLoadMore onClick={handleLoadMore} />}
    </>
  );
};
