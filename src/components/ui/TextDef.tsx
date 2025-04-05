import clsx from 'clsx';

import { ITitle } from '@/utils/interfaces';

interface ITextDefProps extends ITitle {
  size?: 'base' | 'sm';
}

export const TextDef = ({ title, size = 'base' }: ITextDefProps) => {
  return (
    <p
      className={clsx('text-greyLight', size === 'sm' ? 'text-sm' : 'text-base')}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};
