import { Title } from '@/components/ui';
import { splitBySemicolon } from '@/utils/functions';

interface IRecipeInstructionProps {
  instructions: string;
}

export const RecipeInstruction = ({ instructions }: IRecipeInstructionProps) => {
  if (!instructions) return null;

  const instructionList: string[] = splitBySemicolon(instructions);

  return (
    <div>
      <Title type="h3" title="Инструкция" />
      <ul className="flex flex-col gap-y-6 counter-reset">
        {instructionList.map((instruction, index) => (
          <li key={index} className="flex items-start gap-x-2 relative counter-increment">
            <span
              className="
              size-6 flex items-center justify-center rounded-full bg-orange text-white text-sm font-semibold
            "
            >
              {index + 1}
            </span>
            <span className="text-base">{instruction}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
