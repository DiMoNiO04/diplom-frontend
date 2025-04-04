import { BtnCopy } from '@/components/ui/btns';

interface IRecipesInfoProps {
  cookingTime: number;
  calories: number;
}

const STYLES = {
  BLOCK: 'flex flex-col gap-y-2 border-r border-gray-300 pr-3',
  BLOCK_TITLE: 'font-unbounded text-xl',
  BLOCK_TXT: 'font-unbounded italic text-greyLight',
};

export const RecipesInfo = ({ cookingTime, calories }: IRecipesInfoProps) => {
  return (
    <div className="flex items-center justify-start gap-x-6">
      <div className={STYLES.BLOCK}>
        <div className={STYLES.BLOCK_TITLE}>Время приготовления</div>
        <div className={STYLES.BLOCK_TXT}>{cookingTime} мин</div>
      </div>
      <div className={STYLES.BLOCK}>
        <div className={STYLES.BLOCK_TITLE}>Калорий</div>
        <div className={STYLES.BLOCK_TXT}>{calories}</div>
      </div>
      <BtnCopy />
    </div>
  );
};
