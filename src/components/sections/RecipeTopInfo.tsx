import Image from 'next/image';

import { Title } from '@/components/ui';
import { getDate, getImageUrl, isNewRecipe } from '@/utils/functions';
import { IImage, IUser } from '@/utils/interfaces';

import { RecipeRating } from '../blocks/recipe/RecipeRating';
import { RecipeSlider } from '../blocks/recipe/RecipeSlider';
import { IconUser } from '../icons';
import { BtnLike } from '../ui/btns';

interface IRecipeTopInfoProps {
  title: string;
  description: string;
  createdAt: string;
  img: IImage[];
  user: IUser;
  rating?: number;
  percentMakeAgain?: number;
}

export const RecipeTopInfo = ({
  title,
  description,
  createdAt,
  img,
  user,
  rating = 5,
  percentMakeAgain = 90,
}: IRecipeTopInfoProps) => {
  const isNew: boolean = isNewRecipe(createdAt);

  return (
    <section className="my-12 mb-20 max-lg:mb-16 max-lg:my-12">
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
        <Title title={title} className="mb-6" />
        <div
          className={`
          flex items-center justify-start gap-10 pb-6 mb-6 border-b border-gray-300 flex-wrap max-md:gap-5  
        `}
        >
          <div className="flex items-center gap-x-2">
            <div className="rounded-full overflow-hidden size-10 border border-grey shrink-0">
              {user.avatar ? (
                <Image
                  src={getImageUrl(user.avatar.url)}
                  alt=""
                  width={32}
                  height={32}
                  className="size-full object-cover"
                />
              ) : (
                <IconUser size={40} />
              )}
            </div>
            {user.lastName && user.firstName ? (
              <div className="italic text-sm">
                {user.firstName} {user.lastName} <span className="text-orange">({user.username})</span>
              </div>
            ) : (
              <div className="italic text-sm text-orange">{user.username}</div>
            )}
          </div>
          <div className="flex items-center gap-x-2">
            <RecipeRating rating={rating} />
            <div className="text-sm">({rating})</div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="size-5">
              <img src="/icons/calendar.svg" width={20} height={20} alt="" />
            </div>
            <span className="text-sm">{getDate(createdAt)}</span>
          </div>
          {isNew && (
            <div className="flex items-center gap-x-2 bg-orange py-1 px-3 rounded-md text-white font-medium italic">
              <div className="text-sm">Новинка</div>
            </div>
          )}
        </div>
        <div className="mb-6 text-greyLight max-w-2xl text-balance">{description}</div>

        <RecipeSlider images={img} />
      </div>
    </section>
  );
};
