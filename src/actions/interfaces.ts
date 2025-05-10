import { IUserInfo } from '@/stores/user';
import { IBasePage, ICategory, ICollection, IRecipe, ISimpleContent, ITitleWithTexts } from '@/utils/interfaces';

interface ILoginUserReturn extends IApiResultReturn {
  user?: IUserInfo;
}

interface IFormRegDataApi {
  username: string;
  email: string;
  password: string;
}

interface ICategoriesAll {
  results: ICategory[];
}

interface ICategoryPage extends IBasePage, ICategory {}

interface ICollectionPage extends IBasePage, ICollection {}

interface ICollectionsPage extends IBasePage {
  results: ICollection[];
}

interface IFavoriteAddData {
  recipeId: string;
  userId?: number;
}

interface IAboutPage extends IBasePage {
  aboutMain: ISimpleContent;
  simpleRecipes: ISimpleContent;
  operating: ITitleWithTexts;
}

interface IPrivacyPolicyPage extends IBasePage {
  content: string;
}

interface IRecipePage extends IBasePage, IRecipe {}

interface IRecipesAll {
  results: IRecipe[];
}

type TReviewType = 'yes' | 'no';

interface IReviewCreateData {
  recipeId: string;
  userId?: number;
  reviewType: TReviewType;
}

interface IApiUserSubscribe {
  email: string;
  isSubscribe: boolean;
}

interface IApiResultReturn {
  isSuccess: boolean;
  message: string;
}

export type {
  IAboutPage,
  IApiResultReturn,
  IApiUserSubscribe,
  ICategoriesAll,
  ICategoryPage,
  ICollectionPage,
  ICollectionsPage,
  IFavoriteAddData,
  IFormRegDataApi,
  ILoginUserReturn,
  IPrivacyPolicyPage,
  IRecipePage,
  IRecipesAll,
  IReviewCreateData,
};
