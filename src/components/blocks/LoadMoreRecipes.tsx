'use client';

import { useState } from 'react';

import { ICardRecipe } from '@/utils/interfaces';

import { Button } from '../ui';
import { RecipesCardsList } from '.';

interface ILoadMoreRecipesProps {
  remainingRecipes: ICardRecipe[];
  perPage: number;
}

export const LoadMoreRecipes = ({ remainingRecipes, perPage }: ILoadMoreRecipesProps) => {
  const [visibleCount, setVisibleCount] = useState<number>(0);

  const handleLoadMore = () => setVisibleCount((prev) => prev + perPage);

  const visibleRecipes: ICardRecipe[] = remainingRecipes.slice(0, visibleCount);
  const hasMore: boolean = visibleCount < remainingRecipes.length;
  const hasRecipes: boolean = visibleCount !== 0;

  return (
    <>
      {hasRecipes && <RecipesCardsList cards={visibleRecipes} nothingMsg="" />}
      {hasMore && (
        <div className="w-full flex items-center justify-center">
          <Button text="Загрузить еще" size="sm" onClick={handleLoadMore} />
        </div>
      )}
    </>
  );
};
