import { Metadata } from 'next';

import { apiGetFavoritesUser } from '@/actions/favorites';
import { EmailNewsletter, FavoritesContent } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { breadcrumbsFavoritesPage } from '@/utils/breadcrumbs';
import { createMetadata } from '@/utils/seo';
import { seoFavoritesPage } from '@/utils/seo/seoData';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata(seoFavoritesPage());
}

export default async function FavoritesPage() {
  const { data: recipes } = await apiGetFavoritesUser();

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsFavoritesPage} />
      <FavoritesContent recipes={recipes} />
      <EmailNewsletter />
    </>
  );
}
