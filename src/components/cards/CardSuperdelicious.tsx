import Image from 'next/image';
import Link from 'next/link';

import { ISuperDeliciious } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

import { RecipeRating } from '../blocks/recipe';

export const CardSuperdelicious = ({ id, name, img, createdDate, rating, author }: ISuperDeliciious) => {
  const linkUrlRecipe: string = `${EUrls.RECIPES}/${id}`;

  return (
    <Link href={linkUrlRecipe} className="flex flex-col rounded-xl border group overflow-hidden shadow-customLight">
      <div className="transition-transform duration-300 group-lg:hover:scale-105 ">
        <Image src={img} alt="" width={457} height={280} className="size-full" />
      </div>
      <div className="p-6 flex flex-col gap-10 size-full max-sm:p-5 max-sm:gap-4">
        <div className="flex flex-col gap-3 max-sm:gap-2">
          <RecipeRating rating={rating} />
          <div
            className={`
            text-xl font-unbounded font-medium h-14 line-clamp-2 overflow-hidden text-ellipsis whitespace-pre-wrap 
            transition-colors duration-300 lg:hover:text-orange 
            max-sm:text-lg
          `}
          >
            {name}
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full overflow-hidden size-8 p-2 border border-grey">
              <Image src={author.icon} alt="" width={32} height={32} />
            </div>
            <div className="italic text-sm">{author.name}</div>
          </div>
        </div>
        <div className="flex justify-end gap-8">
          <div className="flex items-center gap-2">
            <img src="/icons/calendar.svg" alt="" width={20} height={20} />
            <div className="text-sm italic text-greyLight">{createdDate}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
