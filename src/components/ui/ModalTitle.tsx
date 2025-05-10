import { ITitle } from '@/utils/interfaces';

export const ModalTitle = ({ title }: ITitle) => {
  return (
    <div className="font-unbounded text-2xl mb-4 max-sm:text-xl break-words hyphens-auto whitespace-pre-line">
      {title}
    </div>
  );
};
