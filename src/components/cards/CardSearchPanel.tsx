import Image from 'next/image';
import Link from 'next/link';

import { IRecipe } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

export const CardSearchPanel = ({ title, img, id, category }: IRecipe) => {
  // const { results: cards } = await getCategories();

  const linkUrl: string = `${EUrls.RECIPES}/${id}`;
  // const categoryName: string = cards.find((item) => item.slug === category)!.title;

  return (
    <Link href={linkUrl} className="flex items-center justify-start gap-4 py-5 border-b border-greyLight group">
      <div className="rounded-sm w-24 flex-shrink-0 max-md:w-20">
        <Image src={img[0]} alt="" width={96} height={72} />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-unbounded transition-colors duration-300 group-hover:text-orange max-md:text-sm">{name}</p>
        {/* <p className="italic text-greyLight text-sm font-medium">{categoryName}</p> */}
      </div>
    </Link>
  );
};
