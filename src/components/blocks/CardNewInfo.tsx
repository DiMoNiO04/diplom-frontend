import { isNewRecipe } from '@/utils/functions';

interface ICardNewInfoProps {
  createdAt: string;
}

export const CardNewInfo = ({ createdAt }: ICardNewInfoProps) => {
  const isNew: boolean = isNewRecipe(createdAt);

  return (
    <>
      {isNew && (
        <div className="absolute z-20 py-1 px-3 top-3 left-3 bg-orange rounded-md text-white font-medium italic">
          Новинка
        </div>
      )}
    </>
  );
};
