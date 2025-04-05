'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useAuthModalStore } from '@/stores/authModal';
import { useUserStore } from '@/stores/user';
import { EUrls } from '@/utils/urls';

import { TitleSectionBlock } from '../blocks';
import { Button } from '../ui/btns';

export const ShareYourRecipe = () => {
  const { isAuth } = useUserStore();
  const { openModal } = useAuthModalStore();
  const router = useRouter();

  const handleClickBtn = () => (isAuth ? router.push(EUrls.NEW_RECIPE) : openModal());

  return (
    <section className="bg-pink mb-20">
      <div className="custom-container">
        <div className="grid grid-cols-2 gap-10 py-20">
          <div className="size-full">
            <Image
              src="/img/templates/shareYourRecipe.webp"
              alt="Share your recipe"
              width={255}
              height={255}
              className="size-full"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <TitleSectionBlock title="Поделитесь своими рецептами" />
              <p className="mb-6 font-onest text-lg text-greyLight">
                Хотите поделиться своим любимым рецептом? Это может быть семейное блюдо, проверенное годами, или ваше
                новое кулинарное открытие! Расскажите о своем шедевре, вдохновите других готовить и экспериментировать.
                Ваш рецепт может стать новым фаворитом для многих. Присоединяйтесь и начните свое кулинарное путешествие
                уже сегодня!
              </p>
            </div>
            <Button text="Поделиться рецептом" variant="orange" className="w-fit" onClick={handleClickBtn} />
          </div>
        </div>
      </div>
    </section>
  );
};
