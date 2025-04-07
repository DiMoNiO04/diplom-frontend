import {
  CardCategory,
  CardCollection,
  CardMyRecipe,
  CardRecipe,
  CardSuperdelicious,
  CardTeam,
} from '@/components/cards';
import { NothingMsg } from '@/components/ui';
import { ICategory, ICollection, IRecipe, ISuperDeliciious, ITeamAuthor } from '@/utils/interfaces';

interface ICardsItems<T> {
  cards?: T[];
  nothingMsg: string;
  hideOnMobileAfter?: number;
}

interface ICardsItemsProps<T> extends ICardsItems<T> {
  type: 'category' | 'collection' | 'recipe' | 'favorites' | 'myRecipes' | 'categoryMain' | 'superDelicious' | 'team';
}

export const CardsItems = <T extends ICategory | ICollection | IRecipe | ISuperDeliciious | ITeamAuthor>({
  cards,
  nothingMsg,
  type,
  hideOnMobileAfter,
}: ICardsItemsProps<T>) => {
  if (!cards || cards.length === 0) {
    return <NothingMsg title={nothingMsg} />;
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
      case 'superDelicious':
        return <CardSuperdelicious {...(card as ISuperDeliciious)} />;
      case 'team':
        return <CardTeam {...(card as ITeamAuthor)} />;
      default:
        return null;
    }
  };

  const getCardKey = (card: T): string => {
    if ('id' in card && card.id) return card.id.toString();
    if ('name' in card && card.name) return card.name;
    return Math.random().toString();
  };

  const gridColsMap: Record<string, string> = {
    category: 'grid-cols-5',
    categoryMain: 'grid-cols-6 max-lg:grid-cols-3',
    collection: 'grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1',
    recipe: 'grid-cols-4 max-md:grid-cols-2',
    favorites: 'grid-cols-3',
    myRecipes: 'grid-cols-3',
    superDelicious: 'grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1',
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
