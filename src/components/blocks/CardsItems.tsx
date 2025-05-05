import {
  CardCategory,
  CardCollection,
  CardCookAgain,
  CardDelicious,
  CardMyRecipe,
  CardRecipe,
  CardTeam,
} from '@/components/cards';
import { NothingMsg } from '@/components/ui';
import { ICategory, ICollection, IRecipe, IUser } from '@/utils/interfaces';

import { ICardCookAgain } from '../cards/CardCookAgain';

interface ICardsItems<T> {
  cards?: T[];
  nothingMsg?: string;
  hideOnMobileAfter?: number;
}

interface ICardsItemsProps<T> extends ICardsItems<T> {
  type:
    | 'category'
    | 'collection'
    | 'recipe'
    | 'favorites'
    | 'myRecipes'
    | 'categoryMain'
    | 'deliciousRecipes'
    | 'team'
    | 'cookAgain';
}

export const CardsItems = <T extends ICategory | ICollection | IRecipe | IUser | ICardCookAgain>({
  cards,
  nothingMsg,
  type,
  hideOnMobileAfter,
}: ICardsItemsProps<T>) => {
  if (!cards || cards.length === 0) {
    return <NothingMsg title={nothingMsg || 'Ничего нет!'} />;
  }

  const getCardComponent = (card: T) => {
    switch (type) {
      case 'category':
      case 'categoryMain':
        return <CardCategory {...(card as ICategory)} />;
      case 'collection':
        return <CardCollection {...(card as ICollection)} />;
      case 'recipe':
      case 'favorites':
        return <CardRecipe {...(card as IRecipe)} />;
      case 'myRecipes':
        return <CardMyRecipe {...(card as IRecipe)} />;
      case 'deliciousRecipes':
        return <CardDelicious {...(card as IRecipe)} />;
      case 'team':
        return <CardTeam {...(card as IUser)} />;
      case 'cookAgain':
        return <CardCookAgain {...(card as ICardCookAgain)} />;
      default:
        return null;
    }
  };

  const getCardKey = (card: T): string => card.documentId.toString();

  const gridColsMap: Record<string, string> = {
    category: 'grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2',
    categoryMain: 'grid-cols-6 max-lg:grid-cols-3',
    collection: 'grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1',
    recipe: 'grid-cols-4 max-md:grid-cols-2',
    favorites: 'grid-cols-3 max-lg:grid-cols-2',
    myRecipes: 'grid-cols-3 max-lg:grid-cols-2',
    cookAgain: 'grid-cols-3 max-lg:grid-cols-2',
    deliciousRecipes: 'grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1',
    team: 'grid-cols-6 max-lg:grid-cols-4 max-sm:grid-cols-2',
  };

  return (
    <div className={`grid ${gridColsMap[type]} gap-8 mb-8 max-lg:mb-6 max-lg:gap-6`}>
      {cards.map((card, index) => {
        const isHiddenOnMobile = hideOnMobileAfter !== undefined && index >= hideOnMobileAfter;
        const hiddenClass = isHiddenOnMobile ? 'max-sm:hidden' : '';
        return (
          <div key={getCardKey(card)} className={hiddenClass}>
            {getCardComponent(card)}
          </div>
        );
      })}
    </div>
  );
};
