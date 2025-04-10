'use client';

import { useRouter } from 'next/navigation';

import { EUrls } from '@/utils/urls';

import { Button } from '../ui/btns';

export const NotFoundContent = () => {
  const router = useRouter();
  const goBack = () => router.back();

  return (
    <section>
      <div className="custom-container">
        <div
          className={
            'flex flex-col items-center justify-center py-16 px-4 text-center gap-y-4 min-h-[calc(100vh-96px-272px)]'
          }
        >
          <h1 className="text-orange font-unbounded text-7xl font-bold max-md:text-5xl">404</h1>
          <p className="text-greyLight italic max-w-xl text-lg max-sm:text-base">
            Извините, запрашиваемая страница не существует. <br /> Проверьте URL или вернитесь на главную страницу.
          </p>
          <div className="grid grid-cols-2 gap-4 w-full mt-4 max-w-md max-sm:grid-cols-1 max-sm:gap-2 max-ms:m-0">
            <Button text="Назад" onClick={goBack} />
            <Button text="Главная" href={EUrls.HOME} />
          </div>
        </div>
      </div>
    </section>
  );
};
