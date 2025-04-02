import { splitBySemicolon } from '@/utils/functions';

interface IRecipeIngredientsProps {
  ingredients: string;
}

export const RecipeIngredients = ({ ingredients }: IRecipeIngredientsProps) => {
  if (!ingredients) return null;

  const ingredientList: string[] = splitBySemicolon(ingredients);

  return (
    <div>
      <h3 className="mb-6 font-unbounded text-xl">Ингредиенты</h3>
      <ul className="flex flex-col gap-y-5">
        {ingredientList.map((ingredient, index) => (
          <li key={index} className="flex items-start gap-x-2 relative">
            <span className="w-3 h-3 border-2 border-black rounded-full flex-shrink-0 mt-1.5"></span>
            <span className="text-base">{ingredient}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
