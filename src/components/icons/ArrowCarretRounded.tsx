import { IIcon } from '@/utils/interfaces';

export const ArrowCarretRoundedIcon = ({ color = '#2d2b39', className, size = 20 }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-colors duration-300 ease-in-out ${className}`}
    >
      <path
        d="M9.75 4.5L6 8.25L2.25 4.5"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
