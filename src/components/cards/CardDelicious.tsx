import Image from 'next/image';
import Link from 'next/link';

import { getImageUrl } from '@/utils/functions';
import { IRecipe } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

import { RecipeRating } from '../blocks/recipe';
import { IconUser } from '../icons';

export const CardDelicious = ({ documentId, title, img, createdAt, user }: IRecipe) => {
  const linkUrlRecipe: string = `${EUrls.RECIPES}/${documentId}`;

  return (
    <Link href={linkUrlRecipe} className="flex flex-col rounded-xl border group overflow-hidden shadow-customLight">
      <div className="w-full aspect-[450/280] overflow-hidden transition-transform duration-300 group-hover:scale-105 ">
        <Image src={getImageUrl(img[0].url)} alt="" width={450} height={280} className="size-full object-cover" />
      </div>
      <div className="p-6 flex flex-col gap-10 size-full max-sm:p-5 max-sm:gap-4">
        <div className="flex flex-col gap-3 max-sm:gap-2">
          <RecipeRating rating={5} />
          <div
            className={`
            text-xl font-unbounded font-medium h-14 line-clamp-2 overflow-hidden text-ellipsis whitespace-pre-wrap 
            transition-colors duration-300 hover:text-orange 
            max-sm:text-lg
          `}
          >
            {title}
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full overflow-hidden size-10 border border-grey shrink-0">
              {user.avatar ? (
                <Image
                  src={getImageUrl(user.avatar.url)}
                  alt=""
                  width={32}
                  height={32}
                  className="size-full object-cover"
                />
              ) : (
                <IconUser size={40} />
              )}
            </div>
            {user.lastName && user.firstName ? (
              <div className="italic text-sm">
                {user.firstName} {user.lastName} <br /> <span className="text-orange">({user.username})</span>
              </div>
            ) : (
              <div className="italic text-sm text-orange">{user.username}</div>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-8">
          <div className="flex items-center gap-2">
            <img src="/img/icons/calendar.svg" alt="" width={20} height={20} />
            <div className="text-sm italic text-greyLight">{new Date(createdAt).toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
