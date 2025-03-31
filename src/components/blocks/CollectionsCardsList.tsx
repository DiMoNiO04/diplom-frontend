import { ICollection } from '@/utils/interfaces';

import { CardCollection } from '../cards';
import { NothingMsg } from '../ui';

interface ICollectionCardsList {
  cards?: ICollection[];
  nothingMsg: string;
}

export const CollectionsCardsList = ({ cards, nothingMsg }: ICollectionCardsList) => {
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
