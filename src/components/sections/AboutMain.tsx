import Image from 'next/image';

import { getImageUrl } from '@/utils/functions';
import { ISimpleContent } from '@/utils/interfaces';

import { TextDef, Title } from '../ui';

interface IAboutMain extends ISimpleContent {
  mainTitle: string;
}

export const AboutMain = ({ mainTitle, title, img, texts }: IAboutMain) => {
  return (
    <section className="my-20 max-lg:my-16">
      <div className="custom-container">
        <Title title={mainTitle} isBorder />
        <div className="flex flex-col gap-y-10 max-lg:gap-y-8">
          <Title title={title} type="h2" />
          {img && (
            <Image
              src={getImageUrl(img.url)}
              alt="О нас"
              width={1440}
              height={590}
              priority
              className="w-full h-auto object-cover"
            />
          )}
          {texts.length > 0 && (
            <div className="grid grid-cols-2 gap-x-10 max-lg:grid-cols-1 max-lg:gap-2">
              {texts.map(({ text }) => (
                <TextDef key={text} title={text} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
