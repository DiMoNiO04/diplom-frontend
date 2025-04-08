import { BtnCopy } from '@/components/ui/btns';

import { RecipeInfoBlock } from './RecipeInfoBlock';

interface IRecipesInfoProps {
  cookingTime: number;
  calories: number;
}

export const RecipesInfo = ({ cookingTime, calories }: IRecipesInfoProps) => {
  return (
    <div className="flex items-center justify-start gap-x-6 max-md:flex-col-reverse max-md:gap-3 max-md:items-start">
      <RecipeInfoBlock title="Время приготовления" value={`${cookingTime} мин`} />
      <RecipeInfoBlock title="Калорий" value={calories} />
      <BtnCopy />
    </div>
  );
};
