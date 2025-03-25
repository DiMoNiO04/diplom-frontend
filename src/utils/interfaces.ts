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
  title: string;
  description: string;
  img: string;
}

interface IIcon {
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

export type { ICardCategorie, ICardCuratedCollection, ICardRecipe, IIcon, ILink, IMainSliderSlide, ITitle };
