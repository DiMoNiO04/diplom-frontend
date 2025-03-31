import { CardRecipe } from '@/components/cards';
import { NothingMsg } from '@/components/ui';
import { IRecipe } from '@/utils/interfaces';

interface ICardsListRecipes {
  cards?: IRecipe[];
  nothingMsg: string;
}

export const CardsListRecipes = ({ cards, nothingMsg }: ICardsListRecipes) => {
  if (!cards || cards.length === 0) {
    return <NothingMsg title={nothingMsg} />;
  }

  return (
    <div className="grid grid-cols-4 gap-8 mb-8">
      {cards.map((card) => (
        <CardRecipe key={card.name} {...card} />
      ))}
    </div>
  );
};
