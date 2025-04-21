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
const API_CATEGORY = (slug: string) => `${API_URL}/categories/${slug}`;

export {
  API_ABOUT_PAGE,
  API_CATEGORIES,
  API_CATEGORIES_PAGE,
  API_CATEGORY,
  API_COLLECTIONS_PAGE,
  API_EMAIL_NEWSLETTER_TEMPLATE,
  API_PRIVACY_POLICY,
  API_SHARE_RECIPE_TEMPLATE,
  REVALIDATE_DAY_TIME,
  REVALIDATE_HOUR_TIME,
};
