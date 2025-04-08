import Link from 'next/link';

import { IconArrow } from '@/components/icons';

type TNavigationButton = 'button' | 'link';

interface NavigationButtonProps {
  type: TNavigationButton;
  text: string;
  href?: string;
  rotateArrow?: boolean;
  customClasses?: string;
  onClick?: () => void;
}

export const BtnNavigation = ({
  type,
  text,
  href,
  rotateArrow = false,
  customClasses = '',
  onClick,
}: NavigationButtonProps) => {
  const commonClasses = `flex w-fit items-center gap-x-2 font-unbounded text-greyLight group ${customClasses}`;
  const arrowClass = rotateArrow
    ? 'group-lg:hover:translate-x-[-4px] transition-all duration-300 ease-out'
    : 'group-lg:hover:translate-x-1 transition-all duration-300 ease-out';

  const textClass = 'group-lg:hover:text-orange transition duration-300 ease-out';

  if (type === 'button') {
    return (
      <button onClick={onClick} type="button" className={`${commonClasses} mb-5`}>
        <div className={arrowClass}>
          <IconArrow rotateDeg={rotateArrow ? 180 : 0} />
        </div>
        <span className={textClass}>{text}</span>
      </button>
    );
  }

  if (type === 'link' && href) {
    return (
      <Link href={href} className={commonClasses}>
        <span className={textClass}>{text}</span>
        <div className={arrowClass}>
          <IconArrow />
        </div>
      </Link>
    );
  }

  return null;
};
