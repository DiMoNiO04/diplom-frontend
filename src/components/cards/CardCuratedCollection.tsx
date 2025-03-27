import Image from 'next/image';
import Link from 'next/link';

import { ICardCuratedCollection } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

export const CardCuratedCollection = ({ slug, img, name, countRecipes }: ICardCuratedCollection) => {
  const linkUrl: string = `${EUrls.COLLECTIONS}/${slug}`;

  return (
    <Link href={linkUrl} className="flex flex-col rounded-xl border group overflow-hidden shadow-customLight">
      <div className="transition-transform duration-300 group-hover:scale-105 ">
        <Image src={img} alt="" width={540} height={330} className="size-full" />
      </div>
      <div className="p-6 flex items-end justify-between gap-4 size-full">
        <div className="font-unbounded text-lg font-medium transition-colors duration-300 hover:text-orange">
          {name}
        </div>
        <div
          className={`
          text-xs border border-black py-1 px-3 flex-shrink-0 
          transition-colors duration-300 hover:bg-orange hover:text-white hover:border-orange
        `}
        >
          {countRecipes} рецептов
        </div>
      </div>
    </Link>
  );
};
