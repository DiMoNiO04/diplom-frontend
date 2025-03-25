export const EUrls = {
  CATEGORIES: '/categories',
  RECIPES: '/recipes',
} as const;

export type EUrls = (typeof EUrls)[keyof typeof EUrls];
