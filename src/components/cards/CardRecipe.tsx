'use client';

import Image from 'next/image';
import Link from 'next/link';

import { IRecipe } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

import { BtnLike } from '../ui/btns';

export const CardRecipe = ({ id, name, img }: Omit<IRecipe, 'category'>) => {
  const linkUrlRecipe: string = `${EUrls.RECIPES}/${id}`;

  return (
    <div className="relative w-fit">
      <BtnLike />
      <Link href={linkUrlRecipe} className="flex flex-col gap-2 group">
        <div className="rounded-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
          <Image src={img[0]} alt="" width={350} height={265} />
        </div>
        <div className="text-lg leading-6 font-medium transition-colors duration-300 group-hover:text-orange">
          {name}
        </div>
      </Link>
    </div>
  );
};
