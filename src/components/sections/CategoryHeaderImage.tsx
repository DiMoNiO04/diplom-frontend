import Image from 'next/image';

import { getImageUrl } from '@/utils/functions';
import { IImage } from '@/utils/interfaces';

interface ICategoryHeaderImageProps {
  img: IImage;
}

export const CategoryHeaderImage = ({ img }: ICategoryHeaderImageProps) => {
  return (
    <section className="w-full h-96 relative max-xl:h-80 max-md:h-64">
      <Image src={getImageUrl(img.url)} alt="" fill style={{ objectFit: 'cover' }} priority fetchPriority="high" />
    </section>
  );
};
