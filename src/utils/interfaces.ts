interface ILink {
  linkUrl: string;
  linkTxt: string;
}

interface ITitle {
  title: string;
}

interface ICardCategorie {
  slug: string;
  name: string;
  img: string;
}

interface ICardRecipe {
  id: number;
  name: string;
  img: string;
}

interface IMainSliderSlide {
  slug: string;
  title: string;
  description: string;
  img: string;
}

interface IIcon {
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

interface ICardCuratedCollection {
  slug: string;
  name: string;
  img: string;
  countRecipes: number;
}

interface ICardSuperDeliciious {
  id: number;
  name: string;
  img: string;
  countComments: number;
  createdDate: string;
  rating: number;
  author: {
    name: string;
    icon: string;
  };
}

export type {
  ICardCategorie,
  ICardCuratedCollection,
  ICardRecipe,
  ICardSuperDeliciious,
  IIcon,
  ILink,
  IMainSliderSlide,
  ITitle,
};
