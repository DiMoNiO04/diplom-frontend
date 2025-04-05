import { Button } from '@/components/ui/btns';

interface IBtnLoadMoreProps {
  onClick: () => void;
  text?: string;
}

export const BtnLoadMore = ({ onClick, text = 'Загрузить еще' }: IBtnLoadMoreProps) => {
  return (
    <div className="w-full flex items-center justify-center">
      <Button text={text} onClick={onClick} />
    </div>
  );
};
