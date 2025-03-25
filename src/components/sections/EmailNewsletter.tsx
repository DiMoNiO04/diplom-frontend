import Link from 'next/link';

import { EUrls } from '@/utils/urls';

import { EmailNewsletterForm } from '../blocks';

export const EmailNewsletter = () => {
  return (
    <section className="bg-pink">
      <div className="custom-container">
        <div className="py-20 flex flex-col gap-6 items-center justify-center">
          <div className="flex flex-col gap-1 items-center justify-center max-w-[500px]">
            <h2 className="font-unbounded text-4xl text-center font-medium">Вкуснятина в ваш почтовый ящик</h2>
            <p className="font-onest text-greyLight text-lg">Наслаждайтесь еженедельно новыми рецептами</p>
          </div>
          <EmailNewsletterForm />
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
