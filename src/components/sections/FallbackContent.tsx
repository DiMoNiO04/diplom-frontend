'use client';

import { EUrls } from '@/utils/urls';

import { Button } from '../ui/btns';

export const FallbackContent = () => {
  const handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  return (
    <section>
      <div className="custom-container">
        <div
          className={`
          flex flex-col items-center justify-center py-16 px-4 text-center gap-y-4 min-h-[calc(100vh-96px-272px)]  
        `}
        >
          <h1 className="text-orange font-unbounded text-5xl font-bold max-md:text-4xl">Ошибка</h1>
          <p className="text-greyLight italic max-w-xl text-lg max-sm:text-base">
            Упс! Что-то пошло не так. Попробуйте обновить страницу или вернуться на главную.
          </p>
          <div className="grid grid-cols-2 gap-4 w-full mt-4 max-w-md max-sm:grid-cols-1 max-sm:gap-2">
            <Button text="Обновить" onClick={handleReload} />
            <Button text="Главная" href={EUrls.HOME} />
          </div>
        </div>
      </div>
    </section>
  );
};
