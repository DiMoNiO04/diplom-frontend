import { Title } from '@/components/ui';
import { teamData } from '@/data';

import { RecipeRating } from '../blocks/recipe/RecipeRating';
import { RecipeSlider } from '../blocks/recipe/RecipeSlider';
import { BtnLike } from '../ui/btns';

interface IRecipeTopInfoProps {
  name: string;
  percentMakeAgain: number;
  description: string;
  author: number;
  createdAt: string;
  rating: number;
  img: string[];
}

export const RecipeTopInfo = ({
  name,
  percentMakeAgain,
  description,
  author,
  createdAt,
  rating,
  img,
}: IRecipeTopInfoProps) => {
  const authorInfo = teamData[author];

  return (
    <section className="mt-20 mb-12">
      <div className="custom-container">
        <div className="flex justify-between items-center gap-x-8 relative mb-2">
          {percentMakeAgain && (
            <div className="flex items-start justify-start gap-2 max-w-[700px]">
              <img src="/icons/trendingUp.svg" alt="" width={20} height={20} />
              <span className="text-black text-def italic max-sm:text-sm">
                {percentMakeAgain}% сделали бы это снова
              </span>
            </div>
          )}
          <BtnLike type="recipe" />
        </div>
        <Title title={name} className="mb-6" />
        <div
          className={`
          flex items-center justify-start gap-10 pb-6 mb-6 border-b border-gray-300 flex-wrap max-md:gap-5  
        `}
        >
          <div className="flex items-center gap-x-2">
            <div className="size-8 rounded-full overflow-hidden flex-shrink-0">
              <img src={authorInfo.img} alt="" />
            </div>
            <span className="text-sm">{authorInfo.name}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="size-5">
              <img src="/icons/calendar.svg" width={20} height={20} alt="" />
            </div>
            <span className="text-sm">{new Date(createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <RecipeRating rating={rating} />
            <div className="text-sm">({rating})</div>
          </div>
        </div>
        <div className="mb-6 text-greyLight max-w-2xl text-balance">{description}</div>

        <RecipeSlider images={img} />
      </div>
    </section>
  );
};
