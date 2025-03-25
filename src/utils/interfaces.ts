interface ILink {
  linkUrl: string;
  linkTxt: string;
}

interface ITitle {
  title: string;
}

interface ICardCategorie {
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

export type { ICardCategorie, ICardRecipe, IIcon, ILink, IMainSliderSlide, ITitle };
