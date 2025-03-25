import Link from 'next/link';
import { FormEvent } from 'react';

import { EUrls } from '@/utils/urls';

import { Button } from '../ui';

export const EmailNewsletter = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <section className="bg-pink">
      <div className="custom-container">
        <div className="py-20 flex flex-col gap-6 items-center justify-center">
          <div className="flex flex-col gap-1 items-center justify-center max-w-[500px]">
            <h2 className="font-unbounded text-4xl text-center font-medium">Вкуснятина в ваш почтовый ящик</h2>
            <p className="font-onest text-greyLight text-lg">Наслаждайтесь еженедельно новыми рецептами</p>
          </div>
          <form className="rounded-md bg-white p-1 flex gap-4 items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              autoComplete="off"
              placeholder="Email Address"
              name="email"
              className="font-unbounded size-full border-none pl-4 w-80 placeholder:font-onest"
            />
            <Button text="Подписаться" variant="orange" type="submit" />
          </form>
          <p className="text-def text-greyLight font-onest">
            Подписываясь на рассылку, вы соглашаетесь с{' '}
            <Link
              href={EUrls.PRIVACY_POLICY}
              className={`
                border-b border-orange 
                transition-colors duration-300 hover:border-transparent hover:text-orange  
              `}
            >
              политикой конфиденциальности
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
