import { API_URL } from '@/utils/consts';

const REVALIDATE_HOUR_TIME: number = 3600;
const REVALIDATE_DAY_TIME: number = 86400;

const API_PRIVACY_POLICY: string = `${API_URL}/privacy-policy-page`;
const API_ABOUT_PAGE: string = `${API_URL}/about-page`;
const API_CATEGORIES: string = `${API_URL}/categories`;
const API_CATEGORY = (slug: string) => `${API_URL}/categories/${slug}`;
const API_RECIPES: string = `${API_URL}/recipes`;
const API_RECIPES_BEST: string = `${API_URL}/recipes/bestRating`;
const API_RECIPE = (slug: string) => `${API_URL}/recipes/${slug}`;
const API_MY_RECIPES: string = `${API_URL}/recipes/my`;
const API_COLLECTIONS: string = `${API_URL}/collections`;
const API_COLLECTION = (slug: string) => `${API_URL}/collections/${slug}`;
const API_REGISTER_USER: string = `${API_URL}/auth/local/register`;
const API_LOGIN: string = `${API_URL}/auth/local`;
const API_RESET_PASSWORD: string = `${API_URL}/auth/reset-password`;
const API_FORGOT_PASSWORD: string = `${API_URL}/auth/forgot-password`;
const API_CHANGE_PASSWORD: string = `${API_URL}/auth/change-password`;
const API_USER_INFO: string = `${API_URL}/users/me?populate=*`;
const API_USERS: string = `${API_URL}/users/`;
const API_USERS_TEAM: string = `${API_URL}/users?fields[0]=id&fields[1]=documentId&fields[2]=username&fields[3]=firstName&fields[4]=lastName&fields[5]=patronymic&populate[avatar][fields][0]=url&populate[avatar][fields][1]=alternativeText&populate[avatar][fields][2]=width&populate[avatar][fields][3]=height&populate[avatar][fields][4]=id`;
const API_UPLOAD_FILE: string = `${API_URL}/upload`;
const API_DELETE_FILE = (fileId: string): string => `${API_URL}/upload/files/${fileId}`;
const API_COOK_AGAIN_RECIPES: string = `${API_URL}/reviews/cookAgain`;
const API_REVIEW: string = `${API_URL}/reviews`;
const API_FAVORITES: string = `${API_URL}/favorites`;
const API_FAVORITES_ALL_DELETE: string = `${API_URL}/favorite/deleteAll`;
const API_FAVORITES_USER: string = `${API_URL}/favorite/userFavorites`;

const EMsgActions = {
  SUCCESS_CHANGE_PASSWORD: 'Пароль успешно изменен!',
  SUCCESS_REG: 'Благодарим за регистрацию! Ссылка для подтверждения аккаунта будет отправлена на вашу почту!',
  SUCCESS_EXIT_ACCOUNT: 'Вы вышли из аккаунта!',
  SUCCESS_LOGIN: 'Вы авторизовались!',
  SUCCESS_FORGOT_PASSWORD: 'Отправили Вам письмо с дальнейшими инструкциями на указанную почту!',
  SUCCESS_DELETE_ACCOUNT: 'Аккаунт успешно удален!',
  SUCCESS_UPDATE_USER: 'Данные успешно обновлены!',
  SUCCESS_UPLOAD_FILE: 'Изображение обновлено!',
  SUCCESS_DELETE_FILE: 'Изображение удалено!',
  SUCCESS_DELETE_RECIPE: 'Рецепт удален!',
  SUCCESS_CREATE_RECIPE: 'Рецепт добавлен!',
  SUCCESS_UPDATE_RECIPE: 'Рецепт обновлен!',
  SUCCESS_DELETE_REVIEW: 'Отзыв удален!',
  SUCCESS_CREATE_REVIEW: 'Отзыв добавлен!',
  SUCCESS_DELETE_FAVORITE: 'Рецепт удален из избранного!',
  SUCCESS_ADD_FAVORITE: 'Рецепт добавлен в избранное!',
  SUCCESS_DELETE_ALL_FAVORITES: 'Все рецепты удалены из избранного!',
  SUCCESS_UNSUBSCRIBE: 'Вы отписались от еженедельной рассылки!',
  SUCCESS_SUBSCRIBE: 'Подписка на рассылку новых рецептов оформлена на почту:',
  FAILED_FETCH: 'Ошибка сети или сервера!',
  FAILED_FETCH_TRY_AGAIN: 'Ошибка сети. Повторите позже!',
  FAILED_LOGIN: 'Неверный идентификатор или пароль!',
  FAILED_REG: 'Адрес электронной почты или имя пользователя уже заняты!',
  FAILED_FIND_TOKEN: 'Токен не найден в куках!',
  FAILED_CURRENT_PASSWORD: 'Предоставленный текущий пароль недействителен!',
  FAILED_UPLOAD_FILE: 'Ошибка загрузки файла!',
  FAILED_DELETE_FILE: 'Ошибка удаления файла!',
  BLOCKED_ACC: 'Ваш аккаунт заблокирован администратором!',
  NO_CONFIRM_ACC: 'Ваш адрес электронной почты не подтвержден!',
  NOT_FOUND_ID: 'Не удалось найти ID пользователя!',
} as const;

type EMsgActions = (typeof EMsgActions)[keyof typeof EMsgActions];

const EApiMethods = {
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
  GET: 'GET',
} as const;

type EApiMethods = (typeof EApiMethods)[keyof typeof EApiMethods];

export {
  API_ABOUT_PAGE,
  API_CATEGORIES,
  API_CATEGORY,
  API_CHANGE_PASSWORD,
  API_COLLECTION,
  API_COLLECTIONS,
  API_COOK_AGAIN_RECIPES,
  API_DELETE_FILE,
  API_FAVORITES,
  API_FAVORITES_ALL_DELETE,
  API_FAVORITES_USER,
  API_FORGOT_PASSWORD,
  API_LOGIN,
  API_MY_RECIPES,
  API_PRIVACY_POLICY,
  API_RECIPE,
  API_RECIPES,
  API_RECIPES_BEST,
  API_REGISTER_USER,
  API_RESET_PASSWORD,
  API_REVIEW,
  API_UPLOAD_FILE,
  API_USER_INFO,
  API_USERS,
  API_USERS_TEAM,
  EApiMethods,
  EMsgActions,
  REVALIDATE_DAY_TIME,
  REVALIDATE_HOUR_TIME,
};
