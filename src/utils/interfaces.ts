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
  description?: string;
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

interface ICollection {
  slug: string;
  name: string;
  img: string;
  description?: string;
  recipes: IRecipe[];
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

interface ISelectOption {
  text: string;
  value: string | number;
}

export type {
  ICategory,
  ICollection,
  IIcon,
  ILink,
  IMainSliderSlide,
  IRecipe,
  ISelectOption,
  ISuperDeliciious,
  ITitle,
};
