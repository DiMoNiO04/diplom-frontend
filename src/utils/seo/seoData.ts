import { ISEO } from './interfaces';

const metaRobots: string = 'index, follow';

const seoMainPage = (): ISEO => {
  const seoDataTitle: string = 'Главная | YummyNom';
  const seoDataDescription: string = `
      Откройте для себя вкусные рецепты, советы по приготовлению и кулинарные хитрости,
      чтобы каждый прием пищи стал настоящим наслаждением
    `;

  const seoData = {
    metaTitle: seoDataTitle,
    metaDescription: seoDataDescription,
    canonicalURL: null,
    keywords: 'YummyNom',
    metaRobots,
    openGraph: {
      title: seoDataTitle,
      description: seoDataDescription,
    },
  };

  return seoData;
};

const seoCategoriesPage = (): ISEO => {
  const seoDataTitle: string = 'Категории | YummyNom';
  const seoDataDescription: string = `
    Откройте для себя лучшие рецепты по категориям: завтраки, обеды, ужины,
    десерты и многое другое. Готовьте вкусно и с удовольствием!
  `;
  const seoUrl: string = 'categories/';

  const seoData = {
    metaTitle: seoDataTitle,
    metaDescription: seoDataDescription,
    canonicalURL: seoUrl,
    keywords: 'категории',
    metaRobots,
    openGraph: {
      title: seoDataTitle,
      description: seoDataDescription,
      url: seoUrl,
    },
  };

  return seoData;
};

const seoCollectionsPage = (): ISEO => {
  const seoDataTitle: string = 'Коллекции | YummyNom';
  const seoDataDescription: string = `
    Кулинарные коллекции: подборки лучших рецептов, лайфхаки и идеи для вашего меню. 
    Готовьте легко и с вдохновением!
  `;
  const seoUrl: string = 'collections/';

  const seoData = {
    metaTitle: seoDataTitle,
    metaDescription: seoDataDescription,
    canonicalURL: seoUrl,
    keywords: 'коллекции',
    metaRobots,
    openGraph: {
      title: seoDataTitle,
      description: seoDataDescription,
      url: seoUrl,
    },
  };

  return seoData;
};

const seoRecipesPage = (): ISEO => {
  const seoDataTitle: string = 'Рецепты | YummyNom';
  const seoDataDescription: string = `
    Откройте для себя разнообразие вкусных и простых рецептов на нашем кулинарном блоге.
  `;
  const seoUrl: string = 'recipes/';

  const seoData = {
    metaTitle: seoDataTitle,
    metaDescription: seoDataDescription,
    canonicalURL: seoUrl,
    keywords: 'рецепты',
    metaRobots,
    openGraph: {
      title: seoDataTitle,
      description: seoDataDescription,
      url: seoUrl,
    },
  };

  return seoData;
};

export { seoCategoriesPage, seoCollectionsPage, seoMainPage, seoRecipesPage };
