import { IBreadcrumbItem } from '@/components/ui/Breadcrumbs';
import { EUrls } from '@/utils/urls';

const HOME_CRUMB: IBreadcrumbItem = { label: 'Главная', href: EUrls.HOME };
const PROFILE_CRUMB: IBreadcrumbItem = { label: 'Личный кабинет', href: EUrls.PROFILE };
const RECIPES_CRUMB: IBreadcrumbItem = { label: 'Рецепты', href: EUrls.RECIPES };
const CATEGORIES_CRUMB: IBreadcrumbItem = { label: 'Категории', href: EUrls.CATEGORIES };
const COLLECTIONS_CRUMB: IBreadcrumbItem = { label: 'Коллекции', href: EUrls.COLLECTIONS };

const createBreadcrumbs = (...items: (IBreadcrumbItem | string)[]): IBreadcrumbItem[] =>
  [HOME_CRUMB].concat(items.map((item) => (typeof item === 'string' ? { label: item } : item)));

const breadcrumbsAboutPage = createBreadcrumbs('О нас');
const breadcrumbsPrivacyPolicyPage = createBreadcrumbs('Политика конфиденциальности');
const breadcrumbsCategoriesPage = createBreadcrumbs('Категории');
const breadcrumbsCollectionsPage = createBreadcrumbs('Коллекции');
const breadcrumbsRecipesPage = createBreadcrumbs('Рецепты');
const breadcrumbsSearchPage = createBreadcrumbs('Поиск');
const breadcrumbsProfilePage = createBreadcrumbs('Личный кабинет');
const breadcrumbsSitemapPage = createBreadcrumbs('Карта сайта');
const breadcrumbsMyRecipesPage = createBreadcrumbs(PROFILE_CRUMB, 'Мои рецепты');
const breadcrumbsWantCookAgainPage = createBreadcrumbs(PROFILE_CRUMB, 'Хочу приготовить снова');
const breadcrumbsFavoritesPage = createBreadcrumbs(PROFILE_CRUMB, 'Избранные рецепты');
const breadcrumbsNewRecipePage = createBreadcrumbs(RECIPES_CRUMB, 'Добавление рецепта');

const getCategoryBreadcrumbs = (categoryName: string): IBreadcrumbItem[] =>
  createBreadcrumbs(CATEGORIES_CRUMB, categoryName);

const getCollectionBreadcrumbs = (collectionName: string): IBreadcrumbItem[] =>
  createBreadcrumbs(COLLECTIONS_CRUMB, collectionName);

const getRecipeBreadcrumbs = (recipeName: string): IBreadcrumbItem[] => createBreadcrumbs(RECIPES_CRUMB, recipeName);

const getEditRecipeBreadcrumbs = (recipeName: string, recipeSlug: string): IBreadcrumbItem[] =>
  createBreadcrumbs(RECIPES_CRUMB, { label: recipeName, href: `/recipes/${recipeSlug}` }, 'Редактирование рецепта');

export {
  breadcrumbsAboutPage,
  breadcrumbsCategoriesPage,
  breadcrumbsCollectionsPage,
  breadcrumbsFavoritesPage,
  breadcrumbsMyRecipesPage,
  breadcrumbsNewRecipePage,
  breadcrumbsPrivacyPolicyPage,
  breadcrumbsProfilePage,
  breadcrumbsRecipesPage,
  breadcrumbsSearchPage,
  breadcrumbsSitemapPage,
  breadcrumbsWantCookAgainPage,
  createBreadcrumbs,
  getCategoryBreadcrumbs,
  getCollectionBreadcrumbs,
  getEditRecipeBreadcrumbs,
  getRecipeBreadcrumbs,
};
