import clsx from 'clsx';

import { IIcon } from '@/utils/interfaces';

export const IconEdit = ({ size = 20, className, color = '#706e7c' }: IIcon) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 17.25V21H6.75L17.81 9.94L13.06 5.19L3 17.25Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={clsx('transition-colors duration-300', className)}
      />
      <path
        d="M21 4.5C21.55 4.5 22 4.95 22 5.5C22 6.05 21.55 6.5 21 6.5C20.45 6.5 20 6.05 20 5.5C20 4.95 20.45 4.5 21 4.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={clsx('transition-colors duration-300', className)}
      />
    </svg>
  );
};
