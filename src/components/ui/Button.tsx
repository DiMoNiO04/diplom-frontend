import clsx from 'clsx';
import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

type TButtonVariant = 'default' | 'secondary';
type TButtonSize = 'lg' | 'sm';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: TButtonVariant;
  size?: TButtonSize;
  href?: string;
  external?: boolean;
}

export const Button = ({
  text,
  variant = 'default',
  size = 'lg',
  href,
  external = false,
  className,
  disabled,
  ...props
}: IButtonProps) => {
  const baseStyles = 'inline-block border transition-colors duration-300 text-center rounded';
  const variantStyles = {
    default: 'border-black bg-white text-black hover:bg-black hover:text-white',
    secondary: 'border-orange-500 bg-orange-500 text-white hover:bg-white hover:text-orange-500',
  };
  const sizeStyles = {
    lg: 'px-12 py-3 text-lg',
    sm: 'px-6 py-2 text-sm',
  };

  const classes = clsx(baseStyles, variantStyles[variant], sizeStyles[size], className, {
    'opacity-50 cursor-not-allowed': disabled,
  });

  if (href) {
    return external ? (
      <Link href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {text}
      </Link>
    ) : (
      <Link href={href} className={classes}>
        {text}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {text}
    </button>
  );
};
