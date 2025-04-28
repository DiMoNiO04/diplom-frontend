'use client';

import Image from 'next/image';
import Link from 'next/link';

import { getImageUrl } from '@/utils/functions';
import { IRecipe } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

import { BtnLike } from '../ui/btns';

export const CardRecipe = ({ documentId, title, img }: IRecipe) => {
  const linkUrlRecipe: string = `${EUrls.RECIPES}/${documentId}`;

  return (
    <div className="relative w-fit">
      <BtnLike />
      <Link href={linkUrlRecipe} className="flex flex-col gap-2 group">
        <div
          className={`
          rounded-md  w-full aspect-[350/265] overflow-hidden transition-transform duration-300 group-hover:scale-105
        `}
        >
          <Image src={getImageUrl(img[0].url)} alt="" width={350} height={265} className="size-full object-cover" />
        </div>
        <div
          className={`
          text-lg leading-6 font-medium transition-colors duration-300 group-hover:text-orange max-lg:text-base  
        `}
        >
          {title}
        </div>
      </Link>
    </div>
  );
};
