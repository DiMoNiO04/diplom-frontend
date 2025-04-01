import clsx from 'clsx';

import { ITitle } from '@/utils/interfaces';

interface ITitleProps extends ITitle {
  type?: 'h1' | 'h2';
  className?: string;
}

export const Title = ({ title, type = 'h1', className }: ITitleProps) => {
  return type === 'h1' ? (
    <h1 className={clsx('font-unbounded text-5xl', className)}>{title}</h1>
  ) : (
    <h2 className={clsx('font-unbounded text-4xl', className)}>{title}</h2>
  );
};
