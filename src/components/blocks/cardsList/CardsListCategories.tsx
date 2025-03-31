import { CardCategory } from '@/components/cards';
import { NothingMsg } from '@/components/ui';
import { ICategory } from '@/utils/interfaces';

interface ICardsListCategories {
  cards?: ICategory[];
  nothingMsg: string;
}

export const CardsListCategories = ({ cards, nothingMsg }: ICardsListCategories) => {
  if (!cards || cards.length === 0) {
    return <NothingMsg title={nothingMsg} />;
  }

  return (
    <div className="grid grid-cols-5 gap-8 mb-8">
      {cards.map((card) => (
        <CardCategory key={card.name} {...card} />
      ))}
    </div>
  );
};
