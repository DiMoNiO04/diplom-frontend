import clsx from 'clsx';

import { IHeaderMenuProps } from '@/utils/interfaces';

export const BtnBurger = ({ isOpen, toggleMenu }: IHeaderMenuProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="flex-col justify-between items-center size-8 py-2 lg:hidden flex relative border-0 bg-transparent"
    >
      <span
        className={clsx(
          'w-full h-[2px] rounded bg-black transition-all duration-300',
          isOpen && 'translate-y-[7px] rotate-45'
        )}
      />
      <span className={clsx('w-full h-[2px] rounded bg-black transition-all duration-300', isOpen && 'opacity-0')} />
      <span
        className={clsx(
          'w-full h-[2px] rounded bg-black transition-all duration-300',
          isOpen && '-translate-y-[7px] -rotate-45'
        )}
      />
    </button>
  );
};
