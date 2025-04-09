import { Metadata } from 'next';

import { SITE_NAME } from '../consts';
import { ISEO } from './interfaces';

export const createMetadata = (seo: ISEO): Metadata => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${seo.canonicalURL}`;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords || '',
    robots: seo.metaRobots || 'index, follow',
    viewport: seo.metaViewport || 'width=device-width, initial-scale=1.0',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      siteName: SITE_NAME,
      type: (seo.openGraph.type || 'website') as 'website',
      url: url,
    },
  };
};
