export const EUrls = {
  CATEGORIES: '/categories',
  RECIPES: '/recipes',
  PRIVACY_POLICY: '/privacy-policy',
  COLLECTIONS: '/collections',
} as const;

export type EUrls = (typeof EUrls)[keyof typeof EUrls];
