import { BtnLike, Title } from '@/components/ui';

interface IRecipeTopInfoProps {
  name: string;
  percentMakeAgain: number;
  description: string;
}

export const RecipeTopInfo = ({ name, description, percentMakeAgain }: IRecipeTopInfoProps) => {
  return (
    <section className="my-24">
      <div className="custom-container">
        <div className="flex justify-between items-center gap-x-8 relative">
          {percentMakeAgain && (
            <div className="flex items-start justify-start gap-2 max-w-[700px] mb-1">
              <img src="/icons/trendingUp.svg" alt="" width={20} height={20} />
              <span className="text-black text-def italic">{percentMakeAgain}% сделали бы это снова</span>
            </div>
          )}
          <BtnLike type="recipe" />
        </div>
        <Title title={name} className="mb-6" />
        <div className="flex items-center justify-start gap-x-8 pb-6 mb-6 border-b border-gray-300"></div>
        <div className="mb-6 text-greyLight">{description}</div>
      </div>
    </section>
  );
};
