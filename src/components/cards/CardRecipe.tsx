'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent } from 'react';

import { ICardRecipe } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

import { LikeIcon } from '../icons';

export const CardRecipe = ({ id, name, img }: ICardRecipe) => {
  const linkUrlRecipe: string = `${EUrls.RECIPES}/${id}`;

  const handleLikeClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Link href={linkUrlRecipe} className="flex flex-col gap-2 relative w-fit group">
      <button
        type="button"
        onClick={handleLikeClick}
        className={`
          size-8 flex items-center justify-center absolute top-3 right-3 bg-white rounded-md z-10 
          transition-colors duration-300 hover:bg-whiteLight
        `}
      >
        <LikeIcon />
      </button>
      <div className="rounded-md transition-transform duration-300 group-hover:scale-105">
        <Image src={img} alt="" width={350} height={265} />
      </div>
      <div className="text-lg leading-6 font-medium transition-colors duration-300 group-hover:text-greyLight">
        {name}
      </div>
    </Link>
  );
};
