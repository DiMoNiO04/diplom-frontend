import clsx from 'clsx';

import { IIcon } from '@/utils/interfaces';

export const SearchIcon = ({ size = 20, color = '#2d2b39', className }: IIcon) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="
          M11.2845 11.36L13.5999 13.6M12.8532 7.62669C12.8532 10.5133 10.5132 12.8534 7.62657 
          12.8534C4.73996 12.8534 2.3999 10.5133 2.3999 7.62669C2.3999 4.74008 4.73996 2.40002 
          7.62657 2.40002C10.5132 2.40002 12.8532 4.74008 12.8532 7.62669Z
        "
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        className={clsx('transition-colors duration-300', className)}
      />
    </svg>
  );
};
