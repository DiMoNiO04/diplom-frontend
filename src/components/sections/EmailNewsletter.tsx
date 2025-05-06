'use client';

import { useUserStore } from '@/stores/user';

import { PrivacyPolicyNote, SubscribeNewsletter } from '../blocks';

export const EmailNewsletter = () => {
  const isSubscribe = useUserStore.getState().user?.isSubscribe;

  return (
    <section className="bg-pink">
      <div className="custom-container">
        <div className="py-20 flex flex-col gap-6 items-center justify-center max-lg:py-16">
          <div className="flex flex-col gap-1 items-center justify-center max-w-[500px] max-lg:max-w-full">
            <h2
              className={`font-unbounded text-4xl text-center font-medium max-lg:text-3xl max-sm:text-2xl text-balance`}
            >
              Вкуснятина в ваш почтовый ящик
            </h2>
            <p className="font-onest text-greyLight text-lg max-lg:text-base">
              Наслаждайтесь еженедельно новыми рецептами
            </p>
          </div>
          {isSubscribe ? (
            <div className="italic text-green">Вы подписаны на еженедельную рассылку!</div>
          ) : (
            <>
              <SubscribeNewsletter />
              <PrivacyPolicyNote />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
