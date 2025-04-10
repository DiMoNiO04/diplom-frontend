import clsx from 'clsx';
import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type TButtonVariant = 'default' | 'secondary' | 'orange' | 'red' | 'green';
type TButtonSize = 'lg' | 'sm';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: TButtonVariant;
  size?: TButtonSize;
  href?: string;
  external?: boolean;
  icon?: ReactNode;
}

export const Button = ({
  text,
  variant = 'default',
  size = 'lg',
  href,
  external = false,
  icon,
  className,
  disabled,
  ...props
}: IButtonProps) => {
  const baseStyles =
    'border transition-colors duration-300 text-center rounded inline-flex items-center justify-center gap-2';
  const variantStyles = {
    default: 'border-black bg-white text-black hover:bg-black hover:text-white',
    secondary: 'border-orange-500 bg-orange-500 text-white hover:bg-white hover:text-orange-500',
    orange: 'border-orange bg-orange text-white hover:bg-white hover:text-orange',
    red: 'bg-red text-white border-red hover:bg-white hover:text-red',
    green: 'bg-green text-white border-green hover:bg-white hover:text-green',
  };
  const sizeStyles = {
    lg: 'px-10 py-2.5 text-lg max-sm:px-8 max-sm:py-2',
    sm: 'px-5 py-2 text-sm max-sm:px-4 max-sm:py-1.5',
  };

  const classes = clsx(baseStyles, variantStyles[variant], sizeStyles[size], className, {
    'opacity-50 cursor-not-allowed': disabled,
  });

  const content = (
    <>
      {icon && <span className="flex items-center">{icon}</span>}
      {text}
    </>
  );

  if (href) {
    return external ? (
      <Link href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </Link>
    ) : (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
