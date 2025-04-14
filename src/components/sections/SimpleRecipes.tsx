import Image from 'next/image';

import { getImageUrl } from '@/utils/functions';
import { ISimpleContent } from '@/utils/interfaces';

import { TextDef, Title } from '../ui';

export const SimpleRecipes = ({ title, img, texts }: ISimpleContent) => {
  return (
    <section className="mb-20 max-lg:mb-16">
      <div className="custom-container">
        <div className="grid grid-cols-2 gap-x-10 items-stretch max-lg:grid-cols-1 max-lg:gap-6">
          <div className="flex flex-col gap-y-10 max-lg:gap-8">
            <Title title={title} type="h2" />
            {texts.length > 0 && (
              <div className="flex flex-col gap-y-4 max-lg:gap-y-2">
                {texts.map(({ text }) => (
                  <TextDef key={text} title={text} />
                ))}
              </div>
            )}
          </div>
          {img && (
            <div className="h-full">
              <Image
                src={getImageUrl(img.url)}
                alt={''}
                width={570}
                height={465}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
