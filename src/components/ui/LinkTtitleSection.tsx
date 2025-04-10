import Link from 'next/link';

import { ILink } from '@/utils/interfaces';

export const LinkTitleSection = ({ linkTxt, linkUrl }: ILink) => {
  return (
    <Link
      href={linkUrl}
      className={`
        text-lg italic border-b border-black 
        transition-all duration-200 hover:text-orange hover:border-transparent
      `}
    >
      {linkTxt}
    </Link>
  );
};
