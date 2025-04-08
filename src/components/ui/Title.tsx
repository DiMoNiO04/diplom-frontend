import clsx from 'clsx';

import { ITitle } from '@/utils/interfaces';

interface ITitleProps extends ITitle {
  type?: 'h1' | 'h2' | 'h3';
  isBorder?: boolean;
  className?: string;
}

const STYLES = {
  BORDER: 'pb-8 border-b border-gray-300 mb-16 max-lg:pb-6 max-lg:mb-12',
  BASE: {
    h1: 'font-unbounded text-5xl max-lg:text-4xl hyphens-auto',
    h2: 'font-unbounded text-4xl max-lg:text-3xl hyphens-auto',
    h3: 'mb-6 font-unbounded text-xl font-medium hyphens-auto max-sm:mb-5',
  },
};

export const Title = ({ title, type = 'h1', isBorder = false, className }: ITitleProps) => {
  const classes = clsx(STYLES.BASE[type], isBorder && STYLES.BORDER, className);

  switch (type) {
    case 'h2':
      return <h2 className={classes}>{title}</h2>;
    case 'h3':
      return <h3 className={classes}>{title}</h3>;
    default:
      return <h1 className={classes}>{title}</h1>;
  }
};
