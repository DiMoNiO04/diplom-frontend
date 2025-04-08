import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';

import { IconLogOut } from '@/components/icons';
import { menuProfileData } from '@/data';
import { useClickOutside, useLogout } from '@/hooks';
import { useConfirmModalStore } from '@/stores/confirmModal';
import { getTrimmedPathname } from '@/utils/functions';

export const HeaderUserMenu = () => {
  const pathname = usePathname();
  const trimmedPathname = getTrimmedPathname(pathname);

  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useConfirmModalStore();
  const { logout } = useLogout();

  const dropdownRef = useRef<HTMLDivElement>(null!);

  useClickOutside({
    refs: [dropdownRef],
    callback: () => setIsOpen(false),
  });

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleOpenModalExitAccount = () => openModal('Вы уверены что хотите выйти из аккаунта?', logout);

  return (
    <div ref={dropdownRef}>
      <button
        type="button"
        onClick={handleToggle}
        className={clsx(
          'size-12 overflow-hidden flex items-center justify-center rounded-full border',
          isOpen ? 'border-black' : 'border-greyLight'
        )}
      >
        <Image src={'/icons/user.svg'} width={48} height={48} alt="Аватар" />
      </button>

      <div
        className={clsx(
          'w-auto border-black absolute right-0 top-16 overflow-hidden rounded-lg border bg-white ',
          'transition-all duration-300 scrollbar-hide shadow-customLight',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <ul className="flex flex-col w-fit">
          {menuProfileData.map(({ href, label }) => (
            <li key={href} onClick={handleToggle}>
              <Link
                href={href}
                className={clsx(
                  'px-4 py-3 flex-shrink-0 whitespace-nowrap block',
                  'transition-colors duration-300',
                  trimmedPathname === href ? 'bg-orange text-white' : 'hover:bg-orangeHover'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={handleOpenModalExitAccount}
          type="button"
          className={clsx(
            ' px-4 py-3 group flex-shrink-0 whitespace-nowrap flex items-center justify-center gap-x-2 w-full',
            'hover:bg-orangeHover hover:text-white transition-colors duration-300'
          )}
        >
          <IconLogOut isWhiteHover />
          Выйти
        </button>
      </div>
    </div>
  );
};
