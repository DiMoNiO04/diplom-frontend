'use client';

import { MouseEvent, useEffect, useState } from 'react';

import { IconLike } from '@/components/icons';
import { useFavorite } from '@/hooks/actions';
import { useUserStore } from '@/stores/user';

type TBtnLike = 'card' | 'recipe';

interface IBtnLikeProps {
  recipeId: string;
  likeId?: string;
  isInitiallyLiked?: boolean;
  className?: string;
  type?: TBtnLike;
}

export const BtnLike = ({
  className = '',
  type = 'card',
  recipeId,
  likeId,
  isInitiallyLiked = false,
}: IBtnLikeProps) => {
  const { isAuth } = useUserStore();
  const { addFavorite, deleteFavorite } = useFavorite();

  const [isLiked, setIsLiked] = useState(isInitiallyLiked);

  useEffect(() => {
    setIsLiked(isInitiallyLiked);
  }, [isInitiallyLiked]);

  const handleLikeClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const userId = useUserStore.getState().user?.id;

    if (isLiked) {
      if (likeId) await deleteFavorite(likeId);
    } else {
      if (userId) await addFavorite({ recipeId, userId });
    }

    setIsLiked(!isLiked);
  };

  if (!isAuth) return null;

  return (
    <button
      type="button"
      onClick={handleLikeClick}
      className={`
        flex items-center justify-center flex-shrink-0
        ${
          type === 'card'
            ? 'absolute top-3 size-8 right-3 bg-white hover:bg-whiteLight max-sm:right-2 max-sm:top-2'
            : 'relative size-12 bg-whiteDark hover:bg-white'
        }
        rounded-md z-10 transition-colors duration-300  
        ${className}
      `}
    >
      <IconLike size={type === 'card' ? 20 : 24} color={isLiked ? '#ff642f' : '#7b7b7b'} />
    </button>
  );
};
