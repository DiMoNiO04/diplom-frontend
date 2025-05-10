'use server';

import { cookies } from 'next/headers';
import Link from 'next/link';

import { COOKIES_JWT } from '@/utils/consts';
import { ICategory, ICollection, IRecipe } from '@/utils/interfaces';
import { EUrls } from '@/utils/urls';

import { Title } from '../ui';

interface ISitemapContentProps {
  recipes: IRecipe[];
  categories: ICategory[];
  collections: ICollection[];
}

const staticLinks = [
  { href: EUrls.HOME, label: 'Главная' },
  { href: EUrls.ABOUT, label: 'О нас' },
  { href: EUrls.PRIVACY_POLICY, label: 'Политика конфиденциальности' },
  { href: EUrls.SEARCH, label: 'Поиск' },
  { href: EUrls.SITEMAP, label: 'Карта сайта' },
  { href: EUrls.RECIPES, label: 'Все рецепты' },
  { href: EUrls.COLLECTIONS, label: 'Все коллекции' },
  { href: EUrls.CATEGORIES, label: 'Все категории' },
];

const userStaticLinks = [
  { href: EUrls.PROFILE, label: 'Личный кабинет' },
  { href: EUrls.NEW_RECIPE, label: 'Добавление рецепта' },
  { href: EUrls.MY_RECIPES, label: 'Мои рецепты' },
  { href: EUrls.FAVORITES, label: 'Избранные рецепты' },
  { href: EUrls.WANT_COOK_AGAIN, label: 'Хочу приготовить снова' },
];

export const SitemapContent = async ({ recipes, categories, collections }: ISitemapContentProps) => {
  const isAuth = (await cookies()).get(COOKIES_JWT)?.value;

  return (
    <section className="my-12 mb-20 max-lg:mb-16 max-lg:my-12">
      <div className="custom-container">
        <Title title="Карта сайта" isBorder />

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 mt-8">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-2xl font-semibold text-orange italic">Страницы</h2>
            <ul className="space-y-2">
              {staticLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-black transition-colors duration-300 hover:text-orangeHover">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {isAuth && (
            <div className="flex flex-col gap-y-4">
              <h2 className="text-2xl font-semibold text-orange italic">Страницы профиля</h2>
              <ul className="space-y-2">
                {userStaticLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-black transition-colors duration-300 hover:text-orangeHover">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col gap-y-4">
            <h2 className="text-2xl font-semibold text-orange italic">Категории</h2>
            <ul className="space-y-2">
              <li key={EUrls.CATEGORIES}>
                <Link
                  href={EUrls.CATEGORIES}
                  className="text-black transition-colors duration-300 hover:text-orangeHover italic"
                >
                  Все
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category.documentId}>
                  <Link
                    href={`${EUrls.CATEGORIES}/${category.documentId}`}
                    className="text-black transition-colors duration-300 hover:text-orangeHover"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-y-4">
            <h2 className="text-2xl font-semibold text-orange italic">Коллекции</h2>
            <ul className="space-y-2">
              <li key={EUrls.COLLECTIONS}>
                <Link
                  href={EUrls.COLLECTIONS}
                  className="text-black transition-colors duration-300 hover:text-orangeHover italic"
                >
                  Все
                </Link>
              </li>
              {collections.map((collection) => (
                <li key={collection.documentId}>
                  <Link
                    href={`${EUrls.COLLECTIONS}/${collection.documentId}`}
                    className="text-black transition-colors duration-300 hover:text-orangeHover"
                  >
                    {collection.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-y-4">
            <h2 className="text-2xl font-semibold text-orange italic">Рецепты</h2>
            <ul className="space-y-2">
              <li key={EUrls.RECIPES}>
                <Link
                  href={EUrls.RECIPES}
                  className="text-black transition-colors duration-300 hover:text-orangeHover italic"
                >
                  Все
                </Link>
              </li>
              {recipes.map((recipe) => (
                <li key={recipe.documentId}>
                  <Link
                    href={`${EUrls.RECIPES}/${recipe.documentId}`}
                    className="text-black transition-colors duration-300 hover:text-orangeHover"
                  >
                    {recipe.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
