'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useUserStore } from '@/stores/user';
import { getImageUrl } from '@/utils/functions';
import { IRecipe } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

import { CardNewInfo } from '../blocks';
import { BtnLike } from '../ui/btns';

export interface ICardFavorite {
  id: number;
  documentId: string;
  recipe: IRecipe;
}

export const CardFavorite = ({ documentId, recipe }: ICardFavorite) => {
  const { img: images, title, createdAt, documentId: idRecipe, favorites } = recipe;

  const linkUrlRecipe: string = `${EUrls.RECIPES}/${idRecipe}`;

  const userId = useUserStore.getState().user?.id;

  const userFavorite = favorites?.find((fav) => fav.user.id === userId);
  const isInitiallyLiked = Boolean(userFavorite);
  const likeId = userFavorite?.documentId;

  if (!images && !title) return null;

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
          {images && (
            <Image src={getImageUrl(images[0].url)} alt="" width={350} height={265} className="h-full object-cover" />
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
