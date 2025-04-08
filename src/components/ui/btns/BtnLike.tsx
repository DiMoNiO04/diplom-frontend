'use client';

import { MouseEvent, useState } from 'react';

import { IconLike } from '@/components/icons';
import { useNotificationStore } from '@/stores/notificationMsg';
import { useUserStore } from '@/stores/user';

type TBtnLike = 'card' | 'recipe';

interface IBtnLikeProps {
  className?: string;
  type?: TBtnLike;
}

export const BtnLike = ({ className = '', type = 'card' }: IBtnLikeProps) => {
  const { isAuth } = useUserStore();
  const { showNotification } = useNotificationStore();
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const newState = !isLiked;
    setIsLiked(newState);

    if (newState) {
      showNotification('Добавлено в избранное!', '/icons/onLike.svg');
    } else {
      showNotification('Удалено из избранного!', '/icons/offLike.svg');
    }
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
            ? 'absolute top-3 size-8 right-3 bg-white lg:hover:bg-whiteLight max-sm:right-2 max-sm:top-2'
            : 'relative size-12 bg-whiteDark lg:hover:bg-white'
        } 
         rounded-md z-10 transition-colors duration-300  
        ${className}
      `}
    >
      <IconLike size={type === 'card' ? 20 : 24} color={isLiked ? '#ff642f' : '#7b7b7b'} />
    </button>
  );
};
