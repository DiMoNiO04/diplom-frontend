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
  NEW_RECIPE: '/recipes/new',
} as const;

export type EUrls = (typeof EUrls)[keyof typeof EUrls];
