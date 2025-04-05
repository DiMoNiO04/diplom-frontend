import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type TBtnTextVariant = 'orange' | 'black';

interface IBtnTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: TBtnTextVariant;
  icon?: ReactNode;
}

export const BtnText = ({ text, variant = 'black', icon, className, ...props }: IBtnTextProps) => {
  return (
    <button
      className={clsx(
        'flex items-center gap-x-2 transition-colors duration-300 group',
        {
          'text-black hover:text-orange': variant === 'black',
          'text-orange hover:text-black': variant === 'orange',
        },
        className
      )}
      {...props}
    >
      {icon && <>{icon}</>}
      {text}
    </button>
  );
};
