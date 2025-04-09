import { Metadata } from 'next';

import { BASE_URL, SITE_LOGO, SITE_NAME, STRAPI_URL } from '../consts';
import { ISEO } from './interfaces';

const createMetadata = (seo: ISEO): Metadata => {
  const url = `${BASE_URL}${seo.canonicalURL}`;
  const imageUrl = seo.metaImage?.url ? `${STRAPI_URL}${seo.metaImage.url}` : SITE_LOGO;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords || '',
    robots: seo.metaRobots || 'index, follow',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      siteName: SITE_NAME,
      type: (seo.openGraph.type || 'website') as 'website',
      url: url,
      images: [
        {
          url: imageUrl,
          width: seo.metaImage?.width || 256,
          height: seo.metaImage?.height || 256,
          alt: SITE_NAME,
        },
      ],
    },
  };
};

const createViewport = () => {
  return {
    initialScale: 1,
    width: 'device-width',
    viewportFit: 'cover',
  };
};

export { createMetadata, createViewport };
