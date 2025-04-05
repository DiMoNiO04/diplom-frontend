import { EUrls } from '@/utils/urls';

export const menuFooterData = [
  {
    title: 'Меню',
    links: [
      { text: 'Главная', href: EUrls.HOME },
      { text: 'О нас', href: EUrls.ABOUT },
      { text: 'Категории', href: EUrls.CATEGORIES },
      { text: 'Рецепты', href: EUrls.RECIPES },
      { text: 'Коллекции', href: EUrls.COLLECTIONS },
    ],
  },
  {
    title: 'Полезные ссылки',
    links: [
      { text: 'Политика конфиденциальности', href: EUrls.PRIVACY_POLICY },
      { text: 'Карта сайта', href: EUrls.SITEMAP },
    ],
  },
];
