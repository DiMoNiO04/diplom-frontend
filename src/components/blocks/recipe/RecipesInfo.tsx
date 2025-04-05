import { BtnCopy } from '@/components/ui/btns';

import { RecipeInfoBlock } from './RecipeInfoBlock';

interface IRecipesInfoProps {
  cookingTime: number;
  calories: number;
}

export const RecipesInfo = ({ cookingTime, calories }: IRecipesInfoProps) => {
  return (
    <div className="flex items-center justify-start gap-x-6">
      <RecipeInfoBlock title="Время приготовления" value={`${cookingTime} мин`} />
      <RecipeInfoBlock title="Калорий" value={calories} />
      <BtnCopy />
    </div>
  );
};
