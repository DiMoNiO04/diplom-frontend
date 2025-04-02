import { BtnCopy } from '@/components/ui';

interface IRecipesInfoProps {
  cookingTime: number;
  calories: number;
}

export const RecipesInfo = ({ cookingTime, calories }: IRecipesInfoProps) => {
  return (
    <div className="flex items-center justify-start gap-x-6">
      <div className="flex flex-col gap-y-2 border-r border-gray-300 pr-3">
        <div className="font-unbounded text-xl">Время приготовления</div>
        <div className="font-unbounded italic text-greyLight">{cookingTime} мин</div>
      </div>
      <div className="flex flex-col gap-y-2 border-r border-gray-300 pr-3">
        <div className="font-unbounded text-xl">Калорий</div>
        <div className="font-unbounded italic text-greyLight">{calories}</div>
      </div>
      <BtnCopy />
    </div>
  );
};
