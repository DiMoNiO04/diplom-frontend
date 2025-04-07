import { ITitle } from '@/utils/interfaces';

export const NothingMsg = ({ title }: ITitle) => {
  return <div className="font-unbounded p-10 text-orange italic text-2xl max-md:text-xl max-md:p-1">{title}</div>;
};
