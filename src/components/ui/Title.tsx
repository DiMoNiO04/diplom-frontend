import clsx from 'clsx';

import { ITitle } from '@/utils/interfaces';

interface ITitleProps extends ITitle {
  type?: 'h1' | 'h2';
  isBorder?: boolean;
  className?: string;
}

const STYLES = {
  BORDER: 'pb-8 border-b border-gray-300 mb-16',
};

export const Title = ({ title, type = 'h1', isBorder = false, className }: ITitleProps) => {
  return type === 'h1' ? (
    <h1 className={clsx('font-unbounded text-5xl', isBorder && STYLES.BORDER, className)}>{title}</h1>
  ) : (
    <h2 className={clsx('font-unbounded text-4xl', isBorder && STYLES.BORDER, className)}>{title}</h2>
  );
};
