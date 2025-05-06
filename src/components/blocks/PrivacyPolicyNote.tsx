import Link from 'next/link';

import { EUrls } from '@/utils/urls';

export const PrivacyPolicyNote = () => {
  return (
    <p className="text-def text-greyLight font-onest text-center">
      Подписываясь на рассылку, вы соглашаетесь с{' '}
      <Link
        href={EUrls.PRIVACY_POLICY}
        className={`
          border-b border-orange italic
          transition-colors duration-300 hover:border-transparent hover:text-orange 
        `}
      >
        политикой конфиденциальности
      </Link>
    </p>
  );
};
