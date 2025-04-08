'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import { IconArrowCarretRounded } from '@/components/icons';
import { menuFooterData } from '@/data';

export const FooterMenu = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <div className="flex flex-col gap-8 max-lg:flex-row max-lg:gap-12 max-md:flex-col max-md:gap-4 max-md:w-full">
      {menuFooterData.map(({ title, links }, index) => (
        <div key={title} className="flex flex-col gap-3">
          <div
            className="font-unbounded text-lg max-md:flex max-md:justify-between"
            onClick={() => toggleAccordion(index)}
          >
            {title}
            <div
              className={clsx(
                'transition-transform md:hidden',
                openIndexes.includes(index) ? 'rotate-180' : 'rotate-0'
              )}
            >
              <IconArrowCarretRounded />
            </div>
          </div>
          <ul
            className={clsx(
              'flex gap-8 max-lg:flex-col max-lg:gap-2',
              'max-md:overflow-hidden max-md:transition-[max-height] max-md:duration-300',
              openIndexes.includes(index) ? 'max-md:max-h-96' : 'max-md:max-h-0'
            )}
          >
            {links.map((link) => (
              <li key={link.text} className="text-def text-grey transition-colors duration-300 lg:hover:text-orange">
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
