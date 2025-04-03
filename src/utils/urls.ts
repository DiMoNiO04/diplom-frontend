export const EUrls = {
  HOME: '/',
  CATEGORIES: '/categories',
  RECIPES: '/recipes',
  PRIVACY_POLICY: '/privacy-policy',
  COLLECTIONS: '/collections',
  ABOUT: '/about',
  SEARCH: '/search',
  PROFILE: '/profile',
  FAVORITES: '/favorites',
  MY_RECIPES: '/my-recipes',
} as const;

export type EUrls = (typeof EUrls)[keyof typeof EUrls];
