import clsx from 'clsx';

import { EUrls } from '@/utils/urls';

export const LinkPrivacy = () => {
  return (
    <div>
      Я принимаю условия{' '}
      <a
        href={EUrls.PRIVACY_POLICY}
        tabIndex={-1}
        className={clsx(
          'border-orange text-orange border-b ',
          'lg:hover:text-black transition-colors duration-300 lg:hover:border-transparent'
        )}
      >
        пользовательского соглашения
      </a>
    </div>
  );
};
