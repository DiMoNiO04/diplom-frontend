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

const seoSearchPage = (): ISEO => {
  const seoDataTitle: string = 'Результаты поиска | YummyNom';
  const seoDataDescription: string = 'Найдите рецепты на нашем кулинарном блоге по любому запросу.';
  const seoUrl = 'search/';

  const seoData = {
    metaTitle: seoDataTitle,
    metaDescription: seoDataDescription,
    canonicalURL: seoUrl,
    keywords: 'рецепты',
    metaRobots: 'index, follow',
    openGraph: {
      title: seoDataTitle,
      description: seoDataDescription,
      url: seoUrl,
    },
  };

  return seoData;
};

const seoSitemapPage = (): ISEO => {
  const seoDataTitle: string = 'Карта сайта | YummyNom';
  const seoDataDescription: string = `
    Посмотрите полную карту сайта YummyNom, чтобы легко найти рецепты, коллекции и категории.
    Удобный доступ ко всем разделам для удобства навигации.
  `;
  const seoUrl: string = 'sitemap/';

  const seoData = {
    metaTitle: seoDataTitle,
    metaDescription: seoDataDescription,
    canonicalURL: seoUrl,
    keywords: 'карта сайта, навигация, рецепты, коллекции, категории',
    metaRobots: 'index, follow',
    openGraph: {
      title: seoDataTitle,
      description: seoDataDescription,
      url: seoUrl,
    },
  };

  return seoData;
};

const seoProfilePage = (): ISEO => {
  const seoDataTitle: string = 'Личный кабинет | YummyNom';
  const seoDataDescription: string =
    'Управляйте своими рецептами, коллекциями и настройками профиля в личном кабинете YummyNom.';
  const seoUrl: string = 'profile/';

  const seoData = {
    metaTitle: seoDataTitle,
    metaDescription: seoDataDescription,
    canonicalURL: seoUrl,
    keywords: 'личный кабинет, мои рецепты, настройки',
    metaRobots,
    openGraph: {
      title: seoDataTitle,
      description: seoDataDescription,
      url: seoUrl,
    },
  };

  return seoData;
};

const seoMyRecipesPage = (): ISEO => {
  const seoDataTitle: string = 'Мои рецепты | YummyNom';
  const seoDataDescription: string =
    'Просматривайте, редактируйте и управляйте своими рецептами. Храните любимые блюда в одном месте и делитесь ими с другими.';
  const seoUrl: string = 'profile/my-recipes/';

  const seoData = {
    metaTitle: seoDataTitle,
    metaDescription: seoDataDescription,
    canonicalURL: seoUrl,
    keywords: 'мои рецепты, управление рецептами, личный кабинет',
    metaRobots,
    openGraph: {
      title: seoDataTitle,
      description: seoDataDescription,
      url: seoUrl,
    },
  };

  return seoData;
};

export {
  seoCategoriesPage,
  seoCollectionsPage,
  seoMainPage,
  seoMyRecipesPage,
  seoProfilePage,
  seoRecipesPage,
  seoSearchPage,
  seoSitemapPage,
};
