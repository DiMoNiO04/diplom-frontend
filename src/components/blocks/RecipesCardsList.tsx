import { ICardRecipe } from '@/utils/interfaces';

import { CardRecipe } from '../cards';
import { NothingMsg } from '../ui';

interface IRecipesCardsList {
  cards?: ICardRecipe[];
  nothingMsg: string;
}

export const RecipesCardsList = ({ cards, nothingMsg }: IRecipesCardsList) => {
  if (!cards || cards.length === 0) {
    return <NothingMsg title={nothingMsg} />;
  }

  return (
    <div className="grid grid-cols-4 gap-8">
      {cards.map((card) => (
        <CardRecipe key={card.name} {...card} />
      ))}
    </div>
  );
};
