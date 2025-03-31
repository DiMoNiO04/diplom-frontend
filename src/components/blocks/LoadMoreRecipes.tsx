'use client';

import { useState } from 'react';

import { IRecipe } from '@/utils/interfaces';

import { Button } from '../ui';
import { CardsItems } from './CardsItems';

interface ILoadMoreRecipesProps {
  remainingRecipes: IRecipe[];
  perPage: number;
}

export const LoadMoreRecipes = ({ remainingRecipes, perPage }: ILoadMoreRecipesProps) => {
  const [visibleCount, setVisibleCount] = useState<number>(0);

  const handleLoadMore = () => setVisibleCount((prev) => prev + perPage);

  const visibleRecipes: IRecipe[] = remainingRecipes.slice(0, visibleCount);
  const hasMore: boolean = visibleCount < remainingRecipes.length;
  const hasRecipes: boolean = visibleCount !== 0;

  return (
    <>
      {hasRecipes && <CardsItems type="recipe" cards={visibleRecipes} nothingMsg="" />}
      {hasMore && (
        <div className="w-full flex items-center justify-center">
          <Button text="Загрузить еще" onClick={handleLoadMore} />
        </div>
      )}
    </>
  );
};
