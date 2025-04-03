import { CardCategory, CardCollection, CardRecipe } from '@/components/cards';
import { NothingMsg } from '@/components/ui';
import { ICategory, ICollection, IRecipe } from '@/utils/interfaces';

interface ICardsItems<T> {
  cards?: T[];
  nothingMsg: string;
}

interface ICardsItemsProps<T> extends ICardsItems<T> {
  type: 'category' | 'collection' | 'recipe' | 'favorites';
}

export const CardsItems = <T extends ICategory | ICollection | IRecipe>({
  cards,
  nothingMsg,
  type,
}: ICardsItemsProps<T>) => {
  if (!cards || cards.length === 0) {
    return <NothingMsg title={nothingMsg} />;
  }

  const getCardComponent = (card: T) => {
    switch (type) {
      case 'category':
        return <CardCategory key={card.name} {...(card as ICategory)} />;
      case 'collection':
        return <CardCollection key={card.name} {...(card as ICollection)} />;
      case 'recipe':
        return <CardRecipe key={card.name} {...(card as IRecipe)} />;
      case 'favorites':
        return <CardRecipe key={card.name} {...(card as IRecipe)} />;
      default:
        return null;
    }
  };

  const gridColsMap = {
    category: 'grid-cols-5',
    collection: 'grid-cols-3',
    recipe: 'grid-cols-4',
    favorites: 'grid-cols-3',
  };

  return <div className={`grid ${gridColsMap[type]} gap-8 mb-8`}>{cards.map(getCardComponent)}</div>;
};
