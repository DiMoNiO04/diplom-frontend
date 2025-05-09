import { ISEO } from './seo';
import { IFormRecipeData } from './validations';

interface ILink {
  linkUrl: string;
  linkTxt: string;
}

interface ITitle {
  title: string;
}

interface ICategory {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  img: IImage;
  fullImage: IImage;
  description: string;
  recipes: IRecipe[];
}

interface ICollection {
  id: number;
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
  reviews: IReview[];
  favorites: IFavorite[];
}

interface IUser {
  id: number;
  documentId: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  patronymic: string | null;
  avatar: IImage;
  blocked: boolean;
  isSubscribe: boolean;
}

interface IReview {
  id: number;
  documentId: string;
  reviewType: string;
}

interface IFavorite {
  id: number;
  documentId: string;
  user: {
    id: number;
    documentId: string;
  };
  recipe: {
    id: number;
    documentId: string;
  };
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

interface IRecipesProps {
  recipes: IRecipe[];
}

interface ICategoriesProps {
  categories: ICategory[];
}

interface ICollectionsProps {
  collections: ICollection[];
}

interface ICategoriesAndCollectionsProps extends ICollectionsProps, ICategoriesProps {}

interface ICategoriesAndRecipeEdit {
  categories: ICategory[];
  recipe: IFormRecipeData;
  idRecipe: string;
}

interface ISelectBase {
  options: ISelectOption[];
  placeholder?: string;
  error?: string;
  className?: string;
  label?: string;
  isForm?: boolean;
}

interface IClassNameProps {
  className?: string;
}

interface IApiFetchReturn {
  isSuccess: boolean;
  message: string;
}

export type {
  IApiFetchReturn,
  IAuthorRecipe,
  IBasePage,
  IBtn,
  ICategoriesAndCollectionsProps,
  ICategoriesAndRecipeEdit,
  ICategoriesProps,
  ICategory,
  IClassNameProps,
  ICollection,
  ICollectionsProps,
  IHeaderMenuProps,
  IIcon,
  IImage,
  ILink,
  ILoadMoreProps,
  IMainSliderSlide,
  IPageSlugProps,
  IRecipe,
  IRecipesProps,
  IReview,
  ISelectBase,
  ISelectOption,
  ISimpleContent,
  IText,
  ITitle,
  ITitleWithTexts,
  IUser,
};
