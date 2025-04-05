'use client';

import { MouseEvent } from 'react';

import { IconLike } from '@/components/icons';
import { useUserStore } from '@/stores/user';

type TBtnLike = 'card' | 'recipe';

interface IBtnLikeProps {
  className?: string;
  type?: TBtnLike;
}

export const BtnLike = ({ className = '', type = 'card' }: IBtnLikeProps) => {
  const { isAuth } = useUserStore();

  const handleLikeClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  if (!isAuth) return null;

  return (
    <button
      type="button"
      onClick={handleLikeClick}
      className={`
        flex items-center justify-center 
        ${
          type === 'card'
            ? 'absolute top-3 size-8 right-3 bg-white hover:bg-whiteLight'
            : 'relative size-12 bg-whiteDark hover:bg-white'
        } 
         rounded-md z-10 transition-colors duration-300  
        ${className}
      `}
    >
      <IconLike size={type === 'card' ? 20 : 24} />
    </button>
  );
};
