import { ISEO } from './seo';

interface ILink {
  linkUrl: string;
  linkTxt: string;
}

interface ITitle {
  title: string;
}

interface ICategory {
  documentId: string;
  slug: string;
  title: string;
  img: IImage;
  fullImage: IImage;
  description: string;
  recipes: IRecipe[];
}

interface ICollection {
  documentId: string;
  slug: string;
  title: string;
  img: IImage;
  description: string;
  recipes: IRecipe[];
}

interface IRecipe {
  id: number;
  documentId: string;
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  cookingTime: number;
  calories: number;
  createdAt: string;
  img: IImage[];
  categories: ICategory[];
  collections: ICollection[];
  user: IUser;
}

interface IUser {
  id: number;
  documentId: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  patronymic: string | null;
  avatar: IImage;
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

interface ISelectOption {
  text: string;
  value: string | number;
}

interface IPageSlugProps {
  params: Promise<{ slug: string }>;
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
  id: string;
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
  search?: string;
  nothingText?: string;
}

interface IRecipesProps {
  recipes: IRecipe[];
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
  IPageSlugProps,
  IRecipe,
  IRecipesProps,
  ISelectOption,
  ISimpleContent,
  IText,
  ITitle,
  ITitleWithTexts,
  IUser,
};
