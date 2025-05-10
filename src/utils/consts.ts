import { EUrls } from './urls';

const STRAPI_URL: string = `${process.env.NEXT_PUBLIC_STRAPI_URL}`;
const API_URL: string = `${process.env.NEXT_PUBLIC_API_URL}`;
const BASE_URL: string = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const SITE_NAME: string = `${process.env.NEXT_PUBLIC_SITE_NAME}` || 'YummyNom';
const SITE_LOGO: string = `${STRAPI_URL}/uploads/favicon_b82e379c34.jpg`;

const BREAKPOINT_MOB: number = 1024;
const DELAY_DEBOUNCE: number = 300;
const DELAY_ONE_MIN: number = 60000;

const PER_VISIBLE_SEARCH_RECIPES: number = 16;
const PER_VISIBLE_PAGE_CATEGORIES: number = 6;
const PER_VISIBLE_CURRATED_COLLECTION: number = 6;
const PER_PAGE_RECIPES: number = 16;
const VISIBLE_SLIDER_RECIPES: number = 4;
const TOTAL_STARS: number = 5;
const VISIBLE_TEAM_MEMBERS: number = 12;

const ERROR_ICON: string = '/icons/error.svg';

const COOKIES_JWT: string = 'jwt';
const BEARER_AUTH: string = 'Bearer';
const CONTENT_TYPE: string = 'application/json';

const protectedPaths = [
  `${EUrls.PROFILE}/`,
  `${EUrls.FAVORITES}/`,
  `${EUrls.MY_RECIPES}/`,
  `${EUrls.EDIT_RECIPE}/`,
  `${EUrls.NEW_RECIPE}/`,
  `${EUrls.WANT_COOK_AGAIN}/`,
];

export {
  API_URL,
  BASE_URL,
  BEARER_AUTH,
  BREAKPOINT_MOB,
  CONTENT_TYPE,
  COOKIES_JWT,
  DELAY_DEBOUNCE,
  DELAY_ONE_MIN,
  ERROR_ICON,
  PER_PAGE_RECIPES,
  PER_VISIBLE_CURRATED_COLLECTION,
  PER_VISIBLE_PAGE_CATEGORIES,
  PER_VISIBLE_SEARCH_RECIPES,
  protectedPaths,
  SITE_LOGO,
  SITE_NAME,
  STRAPI_URL,
  TOTAL_STARS,
  VISIBLE_SLIDER_RECIPES,
  VISIBLE_TEAM_MEMBERS,
};
