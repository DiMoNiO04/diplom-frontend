export const EUrls = {
  HOME: '/',
  CATEGORIES: '/categories',
  PRIVACY_POLICY: '/privacy-policy',
  COLLECTIONS: '/collections',
  RECIPES: '/recipes',
  ABOUT: '/about',
  SEARCH: '/search',
  PROFILE: '/profile',
  FAVORITES: '/profile/favorites',
  MY_RECIPES: '/profile/my-recipes',
  NEW_RECIPE: '/recipes/new',
  EDIT_RECIPE: '/edit',
} as const;

export type EUrls = (typeof EUrls)[keyof typeof EUrls];
