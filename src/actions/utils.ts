import { API_URL } from '@/utils/consts';

const REVALIDATE_HOUR_TIME: number = 3600;
const REVALIDATE_DAY_TIME: number = 86400;

const API_PRIVACY_POLICY: string = `${API_URL}/privacy-policy-page`;
const API_ABOUT_PAGE: string = `${API_URL}/about-page`;
const API_SHARE_RECIPE_TEMPLATE: string = `${API_URL}/template-share-recipe`;
const API_EMAIL_NEWSLETTER_TEMPLATE: string = `${API_URL}/template-email-newsletter`;
const API_CATEGORIES_PAGE: string = `${API_URL}/categories-page`;
const API_COLLECTIONS_PAGE: string = `${API_URL}/collections-page`;
const API_CATEGORIES: string = `${API_URL}/categories`;
const API_COLLECTIONS: string = `${API_URL}/collections`;
const API_CATEGORY = (slug: string) => `${API_URL}/categories/${slug}`;
const API_COLLECTION = (slug: string) => `${API_URL}/collections/${slug}`;
const API_REGISTER_USER: string = `${API_URL}/auth/local/register`;
const API_LOGIN: string = `${API_URL}/auth/local`;
const API_RESET_PASSWORD: string = `${API_URL}/auth/reset-password`;
const API_FORGOT_PASSWORD: string = `${API_URL}/auth/forgot-password`;
const API_USER_INFO: string = `${API_URL}/users/me`;
const API_USERS: string = `${API_URL}/users/`;
const API_CHANGE_PASSWORD: string = `${API_URL}/auth/change-password`;

interface IApiResultReturn {
  isSuccess: boolean;
  message: string;
}

export const EMsgActions = {
  FAILED_FETCH: 'Ошибка сети или сервера!',
  FAILED_FETCH_TRY_AGAIN: 'Ошибка сети. Повторите позже!',
  SUCCESS_CHANGE_PASSWORD: 'Пароль успешно изменен!',
  SUCCESS_REG: 'Благодарим за регистрацию! Ссылка для подтверждения аккаунта будет отправлена на вашу почту!',
  SUCCESS_EXIT_ACCOUNT: 'Вы вышли из аккаунта!',
  SUCCESS_LOGIN: 'Вы авторизовались!',
  SUCCESS_FORGOT_PASSWORD: 'Отправили Вам письмо с дальнейшими инструкциями на указанную почту!',
  BLOCKED_ACC: 'Ваш аккаунт заблокирован администратором!',
  NO_CONFIRM_ACC: 'Ваш адрес электронной почты не подтвержден!',
  FAILED_LOGIN: 'Неверный идентификатор или пароль!',
  FAILED_REG: 'Адрес электронной почты или имя пользователя уже заняты!',
  FAILED_FIND_TOKEN: 'Токен не найден в куках!',
  NOT_FOUND_ID: 'Не удалось найти ID пользователя!',
  SUCCESS_DELETE_ACCOUNT: 'Аккаунт успешно удален!',
  FAILED_CURRENT_PASSWORD: 'Предоставленный текущий пароль недействителен!',
} as const;

export type EMsgActions = (typeof EMsgActions)[keyof typeof EMsgActions];

export {
  API_ABOUT_PAGE,
  API_CATEGORIES,
  API_CATEGORIES_PAGE,
  API_CATEGORY,
  API_CHANGE_PASSWORD,
  API_COLLECTION,
  API_COLLECTIONS,
  API_COLLECTIONS_PAGE,
  API_EMAIL_NEWSLETTER_TEMPLATE,
  API_FORGOT_PASSWORD,
  API_LOGIN,
  API_PRIVACY_POLICY,
  API_REGISTER_USER,
  API_RESET_PASSWORD,
  API_SHARE_RECIPE_TEMPLATE,
  API_USER_INFO,
  API_USERS,
  REVALIDATE_DAY_TIME,
  REVALIDATE_HOUR_TIME,
};

export type { IApiResultReturn };
