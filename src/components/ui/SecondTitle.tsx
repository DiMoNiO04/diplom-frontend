import { ITitle } from '@/utils/interfaces';

export const SecondTitle = ({ title }: ITitle) => {
  return <h2 className="font-unbounded text-4xl">{title}</h2>;
};
