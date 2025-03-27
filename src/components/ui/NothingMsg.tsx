import { ITitle } from '@/utils/interfaces';

export const NothingMsg = ({ title }: ITitle) => {
  return <div className="font-unbounded p-10 text-orange italic text-2xl">{title}</div>;
};
