import Image from 'next/image';
import Link from 'next/link';

import { getImageUrl } from '@/utils/functions';
import { IRecipe } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

export const CardSearchPanel = ({ title, img, documentId, categories }: IRecipe) => {
  const linkUrl: string = `${EUrls.RECIPES}/${documentId}`;

  return (
    <Link href={linkUrl} className="flex items-center justify-start gap-4 py-5 border-b border-greyLight group">
      <div className="rounded-sm w-24 aspect-[96/72] max-md:w-20 flex-shrink-0">
        <Image src={getImageUrl(img[0].url)} alt="" width={96} height={72} className="size-full object-cover" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-unbounded transition-colors duration-300 group-hover:text-orange max-md:text-sm">{title}</p>
        {categories.map((category) => (
          <p className="italic text-greyLight text-sm font-medium" key={category.slug}>
            {category.title}
          </p>
        ))}
      </div>
    </Link>
  );
};
