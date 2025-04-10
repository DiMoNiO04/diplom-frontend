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
  description: string;
  ingredients: string;
  instructions: string;
  cookingTime: number;
  calories: number;
  img: string[];
  isPublished: boolean;
  createdAt: string;
  author: number;
  category: string;
  percentMakeAgain: number;
  rating: number;
}

interface IAuthorRecipe {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
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

interface ITeamAuthor {
  id: number;
  img: string;
  name: string;
  description: string;
}

interface IPageSlugProps {
  params: Promise<{ slug: string }>;
}

interface IPageIdProps {
  params: Promise<{ id: string }>;
}

interface ILoadMoreProps<T> {
  remainingCards: T[];
  perPage: number;
}

interface IHeaderMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export type {
  IAuthorRecipe,
  ICategory,
  ICollection,
  IHeaderMenuProps,
  IIcon,
  ILink,
  ILoadMoreProps,
  IMainSliderSlide,
  IPageIdProps,
  IPageSlugProps,
  IRecipe,
  ISelectOption,
  ISuperDeliciious,
  ITeamAuthor,
  ITitle,
};
