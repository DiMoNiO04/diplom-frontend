import { IRecipe } from '@/utils/interfaces';

import { RecipeTopInfo } from '../blocks/recipe';
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
  createdAt,
  author,
  rating,
}: IRecipe) => {
  return (
    <>
      {isPublished ? (
        <>
          <RecipeTopInfo
            rating={rating}
            createdAt={createdAt}
            img={img}
            name={name}
            author={author}
            description={description}
            percentMakeAgain={percentMakeAgain}
          />
          <RecipeContentInfo
            calories={calories}
            cookingTime={cookingTime}
            ingredients={ingredients}
            instructions={instructions}
          />
        </>
      ) : (
        <section className="my-20">
          <div className="custom-container">
            <NothingMsg title="Не опубликовано, находится на модерации" />
          </div>
        </section>
      )}
    </>
  );
};
