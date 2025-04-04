'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { EUrls } from '@/utils/urls';

const STYLES = {
  ITEM: 'border-b border-gray-300',
  LINK: 'p-4 text-black font-medium w-full block text-lg',
  LINK_HOVER: 'transition-colors duration-300 hover:bg-orangeHover',
  LINK_ACTIVE: 'bg-orange text-white',
};

export const ProfileAsideMenu = () => {
  const pathname = usePathname();
  const trimmedPathname = pathname.slice(0, -1);

  return (
    <aside className="rounded-md bg-whiteDark w-full h-fit sticky top-28 overflow-hidden">
      <ul className="flex flex-col">
        <li className={STYLES.ITEM}>
          <Link
            href={EUrls.PROFILE}
            className={clsx(STYLES.LINK, STYLES.LINK_HOVER, trimmedPathname === EUrls.PROFILE && STYLES.LINK_ACTIVE)}
          >
            Личный кабинет
          </Link>
        </li>
        <li className={STYLES.ITEM}>
          <Link
            href={EUrls.FAVORITES}
            className={clsx(STYLES.LINK, STYLES.LINK_HOVER, trimmedPathname === EUrls.FAVORITES && STYLES.LINK_ACTIVE)}
          >
            Избранные
          </Link>
        </li>
        <li className={clsx(STYLES.ITEM, 'border-none')}>
          <Link
            href={EUrls.MY_RECIPES}
            className={clsx(STYLES.LINK, STYLES.LINK_HOVER, trimmedPathname === EUrls.MY_RECIPES && STYLES.LINK_ACTIVE)}
          >
            Мои рецепты
          </Link>
        </li>
      </ul>
    </aside>
  );
};
