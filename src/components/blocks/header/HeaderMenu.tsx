import clsx from 'clsx';
import Link from 'next/link';

import { menuHeaderData } from '@/data';
import { IHeaderMenuProps } from '@/utils/interfaces';

export const HeaderMenu = ({ isOpen, toggleMenu }: IHeaderMenuProps) => {
  return (
    <nav>
      <ul
        className={clsx(
          'flex items-center justify-center gap-12',
          'max-lg:fixed max-lg:bottom-0 max-lg:left-0 max-lg:bg-whiteDark max-lg:flex-col max-lg:gap-6',
          'max-lg:w-full max-lg:h-[calc(100vh-80px)] max-lg:transition-transform max-lg:duration-300',
          isOpen ? 'max-lg:translate-x-0' : 'max-lg:translate-x-full'
        )}
      >
        {menuHeaderData.map(({ link, name }) => (
          <li key={link} className="text-lg font-unbounded transition-colors duration-300 hover:text-orange">
            <Link href={link} onClick={toggleMenu}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
