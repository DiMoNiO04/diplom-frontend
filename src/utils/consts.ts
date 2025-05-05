import { EUrls } from './urls';

const STRAPI_URL: string = `${process.env.NEXT_PUBLIC_STRAPI_URL}`;
const API_URL: string = `${process.env.NEXT_PUBLIC_API_URL}`;
const BASE_URL: string = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const SITE_NAME: string = `${process.env.NEXT_PUBLIC_SITE_NAME}` || 'YummyNom';
const SITE_LOGO: string = `${STRAPI_URL}/uploads/favicon_b82e379c34.jpg`;

const BREAKPOINT_MOB: number = 1024;
const DELAY_DEBOUNCE: number = 300;
const DELAY_ONE_MIN: number = 60000;

const ERROR_ICON: string = '/icons/error.svg';

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
  BREAKPOINT_MOB,
  DELAY_DEBOUNCE,
  DELAY_ONE_MIN,
  ERROR_ICON,
  protectedPaths,
  SITE_LOGO,
  SITE_NAME,
  STRAPI_URL,
};
