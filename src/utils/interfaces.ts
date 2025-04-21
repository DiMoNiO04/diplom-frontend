import { ISEO } from './seo';

interface ILink {
  linkUrl: string;
  linkTxt: string;
}

interface ITitle {
  title: string;
}

interface ICategory {
  slug: string;
  title: string;
  img: IImage;
  fullImage: string;
  description?: string;
  recipes: IRecipe[];
  seo?: ISEO;
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
  title: string;
  img: IImage;
  description?: string;
  recipes: IRecipe[];
  seo?: ISEO;
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

interface IBasePage {
  seo: ISEO;
  title: string;
}

interface IImage {
  url: string;
  width: string;
  height: string;
  alternativeText: string;
}

interface IText {
  text: string;
}

interface IBtn {
  text: string;
  link: string;
}

interface ISimpleContent {
  title: string;
  texts: IText[];
  img: IImage;
}

interface ITitleWithTexts {
  title: string;
  texts: IText[];
}

interface IHeaderSearchBlockPage {
  title: string;
  search: string;
  nothingText: string;
}

export type {
  IAuthorRecipe,
  IBasePage,
  IBtn,
  ICategory,
  ICollection,
  IHeaderMenuProps,
  IHeaderSearchBlockPage,
  IIcon,
  IImage,
  ILink,
  ILoadMoreProps,
  IMainSliderSlide,
  IPageIdProps,
  IPageSlugProps,
  IRecipe,
  ISelectOption,
  ISimpleContent,
  ISuperDeliciious,
  ITeamAuthor,
  IText,
  ITitle,
  ITitleWithTexts,
};
