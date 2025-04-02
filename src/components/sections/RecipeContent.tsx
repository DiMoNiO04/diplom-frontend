import { IRecipe } from '@/utils/interfaces';

import { RecipeIngredients, RecipeInstruction, RecipesInfo, RecipeTopInfo } from '../blocks/recipe';
import { NothingMsg } from '../ui';
import { RecipeContentInfo } from './RecipeContentInfo';

export const RecipeContent = ({
  id,
  name,
  img,
  description,
  calories,
  cookingTime,
  isPublished,
  ingredients,
  instructions,
  percentMakeAgain,
}: IRecipe) => {
  return (
    <>
      {isPublished ? (
        <>
          <RecipeTopInfo name={name} description={description} percentMakeAgain={percentMakeAgain} />
          <RecipeContentInfo
            calories={calories}
            cookingTime={cookingTime}
            ingredients={ingredients}
            instructions={instructions}
          />
        </>
      ) : (
        <section className="my-24">
          <div className="custom-container">
            <NothingMsg title="Не опубликовано, находится на модерации" />
          </div>
        </section>
      )}
    </>
  );
};
