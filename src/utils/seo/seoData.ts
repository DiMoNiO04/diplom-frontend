import { ISEO } from './interfaces';

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
    openGraph: {
      title: seoDataTitle,
      description: seoDataDescription,
    },
  };

  return seoData;
};

export { seoMainPage };
