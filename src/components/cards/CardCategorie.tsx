import Image from 'next/image';
import Link from 'next/link';

import { ICardCategorie } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

export const CardCategorie = ({ name, img, slug }: ICardCategorie) => {
  const linkUrl: string = `${EUrls.CATEGORIES}/${slug}`;

  return (
    <Link href={linkUrl} className="flex flex-col items-center justify-center gap-4 w-full group">
      <div className="rounded-full transition-transform duration-300 group-hover:scale-105">
        <Image src={img} alt={''} width={255} height={255} />
      </div>
      <div className=" text-center text-xl font-medium transition-colors duration-300 group-hover:text-orange">
        {name}
      </div>
    </Link>
  );
};
