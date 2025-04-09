const STRAPI_URL: string = `${process.env.NEXT_PUBLIC_STRAPI_URL}`;
const API_URL: string = `${process.env.NEXT_PUBLIC_API_URL}`;
const BASE_URL: string = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const SITE_NAME: string = `${process.env.NEXT_PUBLIC_SITE_NAME}` || 'YummyNom';
const SITE_LOGO: string = `${STRAPI_URL}/uploads/favicon_b82e379c34.jpg`;

export { API_URL, BASE_URL, SITE_LOGO, SITE_NAME, STRAPI_URL };
