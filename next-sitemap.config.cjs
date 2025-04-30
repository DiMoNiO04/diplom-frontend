async function fetchData(endpoint) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}`);
    }

    const data = await response.json();
    return data?.results || [];
  } catch (error) {
    console.error(`Ошибка при получении ${endpoint}:`, error);
    return [];
  }
}


/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 1.0,
  exclude: [],

  async additionalPaths(config) {
    const staticPaths = [
      '/',
      '/about',
      '/privacy-policy',
      '/search',
      '/recipes',
      '/collections',
      '/categories',
      '/sitemap'
    ].map((path) => ({ loc: path }));

    const [recipes, collections, categories] = await Promise.all([
      fetchData('recipes'),
      fetchData('collections'),
      fetchData('categories'),
    ]);

    const recipePaths = recipes.map((r) => ({ loc: `/recipes/${r.documentId}` }));
    const collectionPaths = collections.map((c) => ({ loc: `/collections/${c.documentId}` }));
    const categoryPaths = categories.map((cat) => ({ loc: `/categories/${cat.documentId}` }));

    return [...staticPaths, ...recipePaths, ...collectionPaths, ...categoryPaths];
  },
};
