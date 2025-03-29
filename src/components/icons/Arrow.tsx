import { IIcon } from '@/utils/interfaces';

interface ArrowIconProps extends IIcon {
  rotateDeg?: number;
}

export const ArrowIcon = ({ color, rotateDeg = 0 }: ArrowIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group-hover:stroke-orange stroke-current transition-all duration-300"
      style={{
        stroke: color && color,
        transform: `rotate(${rotateDeg}deg)`,
        transformOrigin: 'center',
      }}
    >
      <path d="M2.5 8H13.5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 3.5L13.5 8L9 12.5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
