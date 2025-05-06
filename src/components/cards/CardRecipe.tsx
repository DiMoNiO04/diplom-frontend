'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useUserStore } from '@/stores/user';
import { getImageUrl } from '@/utils/functions';
import { IRecipe } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

import { CardNewInfo } from '../blocks';
import { BtnLike } from '../ui/btns';

export const CardRecipe = ({ documentId, title, img, createdAt, favorites }: IRecipe) => {
  const linkUrlRecipe: string = `${EUrls.RECIPES}/${documentId}`;

  const userId = useUserStore.getState().user?.id;

  const userFavorite = favorites?.find((fav) => fav.user.id === userId);
  const isInitiallyLiked = Boolean(userFavorite);
  const likeId = userFavorite?.documentId;

  if (!img && !title) return null;

  return (
    <div className="relative w-fit">
      <CardNewInfo createdAt={createdAt} />
      <BtnLike recipeId={documentId} isInitiallyLiked={isInitiallyLiked} likeId={likeId} />
      <Link href={linkUrlRecipe} className="flex flex-col gap-2 group">
        <div
          className={`
          rounded-md w-full aspect-[350/265] overflow-hidden transition-transform duration-300 group-hover:scale-105
        `}
        >
          {img && (
            <Image src={getImageUrl(img[0].url)} alt="" width={350} height={265} className="size-full object-cover" />
          )}
        </div>
        {title && (
          <div
            className={`
          text-lg leading-6 font-medium transition-colors duration-300 group-hover:text-orange max-lg:text-base  
        `}
          >
            {title}
          </div>
        )}
      </Link>
    </div>
  );
};
