interface ILink {
  linkUrl: string;
  linkTxt: string;
}

interface ITitle {
  title: string;
}

interface ICategory {
  slug: string;
  name: string;
  img: string;
  fullImage: string;
  description: string;
  recipes: IRecipe[];
}

interface IRecipe {
  id: number;
  name: string;
  img: string;
  category: {
    name: string;
  };
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

interface ICuratedCollection {
  slug: string;
  name: string;
  img: string;
  countRecipes: number;
}

interface ISuperDeliciious {
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

export type { ICategory, ICuratedCollection, IIcon, ILink, IMainSliderSlide, IRecipe, ISuperDeliciious, ITitle };
