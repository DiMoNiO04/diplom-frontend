'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { menuProfileData } from '@/data';
import { getTrimmedPathame } from '@/utils/functions';

const STYLES = {
  ITEM: 'border-b border-gray-300',
  LINK: 'p-4 text-black font-medium w-full block text-lg',
  LINK_HOVER: 'transition-colors duration-300 hover:bg-orangeHover',
  LINK_ACTIVE: 'bg-orange text-white',
};

export const ProfileAsideMenu = () => {
  const pathname = usePathname();
  const trimmedPathname = getTrimmedPathame(pathname);

  return (
    <aside className="rounded-md bg-whiteDark w-full h-fit sticky top-28 overflow-hidden">
      <ul className="flex flex-col">
        {menuProfileData.map(({ href, label }, index) => (
          <li key={href} className={clsx(STYLES.ITEM, index === menuProfileData.length - 1 && 'border-none')}>
            <Link
              href={href}
              className={clsx(STYLES.LINK, STYLES.LINK_HOVER, trimmedPathname === href && STYLES.LINK_ACTIVE)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
