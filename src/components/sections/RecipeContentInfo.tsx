import { RecipeIngredients, RecipeInstruction, RecipesInfo } from '../blocks/recipe';

interface IRecipeContentInfoProps {
  calories: number;
  cookingTime: number;
  ingredients: string;
  instructions: string;
}

export const RecipeContentInfo = ({ calories, cookingTime, ingredients, instructions }: IRecipeContentInfoProps) => {
  return (
    <section className="mb-24">
      <div className="custom-container">
        <div className="flex flex-col gap-y-16">
          <RecipesInfo calories={calories} cookingTime={cookingTime} />
          <div className="grid grid-cols-[0.6fr_1fr] gap-x-20">
            <RecipeIngredients ingredients={ingredients} />
            <RecipeInstruction instructions={instructions} />
          </div>
        </div>
      </div>
    </section>
  );
};
