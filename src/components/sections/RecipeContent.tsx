import { IRecipe } from '@/utils/interfaces';

import { RecipeIngredients, RecipeInstruction, RecipesInfo } from '../blocks/recipe';
import { NothingMsg } from '../ui';

export const RecipeContent = ({
  id,
  name,
  img,
  calories,
  cookingTime,
  isPublished,
  ingredients,
  instructions,
}: IRecipe) => {
  return (
    <section className="my-24">
      <div className="custom-container">
        {isPublished ? (
          <>
            <div className="flex flex-col gap-y-16">
              <RecipesInfo calories={calories} cookingTime={cookingTime} />
              <div className="grid grid-cols-[0.6fr_1fr] gap-x-20">
                <RecipeIngredients ingredients={ingredients} />
                <RecipeInstruction instructions={instructions} />
              </div>
            </div>
          </>
        ) : (
          <NothingMsg title={'Не опубликовано, находится на модерации'} />
        )}
      </div>
    </section>
  );
};
