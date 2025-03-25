export const EUrls = {
  CATEGORIES: '/categories',
} as const;

export type EUrls = (typeof EUrls)[keyof typeof EUrls];
