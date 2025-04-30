import { EmailNewsletter, FavoritesContent } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { breadcrumbsFavoritesPage } from '@/utils/breadcrumbs';

export default async function FavoritesPage() {
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsFavoritesPage} />
      <FavoritesContent />
      <EmailNewsletter />
    </>
  );
}
