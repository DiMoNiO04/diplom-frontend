import Link from 'next/link';

import { ILink } from '@/utils/interfaces';

export const LinkTitleSection = ({ linkTxt, linkUrl }: ILink) => {
  return (
    <Link
      href={linkUrl}
      className={`
        font-onest text-lg italic border-b border-black 
        transition-all duration-200 hover:text-greyLight hover:border-transparent
      `}
    >
      {linkTxt}
    </Link>
  );
};
