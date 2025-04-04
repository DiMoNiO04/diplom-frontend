'use client';

import Image from 'next/image';
import Link from 'next/link';

import { IRecipe } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

import { DeleteIcon, EditIcon } from '../icons';

export const CardMyRecipe = ({ id, name, img, isPublished }: Omit<IRecipe, 'category'>) => {
  const linkUrlRecipe: string = `${EUrls.RECIPES}/${id}`;

  return (
    <div className="flex flex-col gap-2 relative w-fit group">
      <div className="absolute top-3 right-3 flex items-center gap-x-2 z-20">
        <button
          type="button"
          className="size-8 flex items-center justify-center rounded-md bg-white transition-colors duration-300 hover:bg-orange"
        >
          <DeleteIcon className="fill-greyLight" />
        </button>
        <button
          type="button"
          className="size-8 flex items-center justify-center rounded-md bg-white transition-colors duration-300 hover:bg-orange"
        >
          <EditIcon className="stroke-greyLight" />
        </button>
      </div>

      {isPublished ? (
        <Link href={linkUrlRecipe} className="flex flex-col gap-2 relative w-fit group">
          <div className="rounded-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <Image src={img[0]} alt="" width={350} height={265} />
          </div>
          <div className="text-lg leading-6 font-medium transition-colors duration-300 group-hover:text-orange">
            {name}
          </div>
        </Link>
      ) : (
        <div className="flex flex-col gap-2 relative w-fit cursor-not-allowed opacity-50">
          <div className="rounded-md overflow-hidden">
            <Image src={img[0]} alt="" width={350} height={265} />
          </div>
          <div className="text-lg leading-6 font-medium text-greyDark">{name}</div>
        </div>
      )}
    </div>
  );
};
