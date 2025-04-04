import clsx from 'clsx';

import { IIcon } from '@/utils/interfaces';

export const IconClose = ({ color = '#2d2b39', className, size = 24 }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('transition-colors duration-300', className)}
      stroke={color}
    >
      <path d="M15.625 4.375L4.375 15.625" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.625 15.625L4.375 4.375" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
