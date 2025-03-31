import { CardCollection } from '@/components/cards';
import { NothingMsg } from '@/components/ui';
import { ICollection } from '@/utils/interfaces';

interface ICardsListCollection {
  cards?: ICollection[];
  nothingMsg: string;
}

export const CardsListCollections = ({ cards, nothingMsg }: ICardsListCollection) => {
  if (!cards || cards.length === 0) {
    return <NothingMsg title={nothingMsg} />;
  }

  return (
    <div className="grid grid-cols-3 gap-8 mb-8">
      {cards.map((card) => (
        <CardCollection key={card.name} {...card} />
      ))}
    </div>
  );
};
