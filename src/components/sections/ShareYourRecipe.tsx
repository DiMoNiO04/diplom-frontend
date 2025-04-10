'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { IShareRecipeTemplate } from '@/actions';
import { useAuthModalStore } from '@/stores/authModal';
import { useUserStore } from '@/stores/user';
import { getImageUrl } from '@/utils/functions';
import { EUrls } from '@/utils/urls';

import { TitleSectionBlock } from '../blocks';
import { Button } from '../ui/btns';

export const ShareYourRecipe = ({ title, texts, img, btn }: IShareRecipeTemplate) => {
  const { isAuth } = useUserStore();
  const { openModal } = useAuthModalStore();
  const router = useRouter();

  const handleClickBtn = () => (isAuth ? router.push(EUrls.NEW_RECIPE) : openModal());

  return (
    <section className="bg-pink mb-20 max-lg:mb-16">
      <div className="custom-container">
        <div className="grid grid-cols-2 gap-10 py-20 max-lg:py-12 max-lg:flex max-lg:flex-col">
          {img && (
            <div className="size-full">
              <Image
                src={getImageUrl(img.url)}
                alt="Share your recipe"
                width={255}
                height={255}
                className="size-full"
              />
            </div>
          )}
          <div className="flex flex-col justify-between">
            <div>
              <TitleSectionBlock title={title} />
              {texts.length > 0 && (
                <div className="flex flex-col gap-2">
                  {texts.map(({ text }) => (
                    <p key={text} className="mb-6 font-onest text-lg text-greyLight max-lg:text-base">
                      {text}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <Button text={btn.text} variant="orange" className="w-fit" onClick={handleClickBtn} />
          </div>
        </div>
      </div>
    </section>
  );
};
