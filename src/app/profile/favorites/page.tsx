import { getEmailNewsletterTemplate } from '@/actions';
import { EmailNewsletter, FavoritesContent } from '@/components/sections';

export default async function FavoritesPage() {
  const emailNewsletterTemplate = await getEmailNewsletterTemplate();

  return (
    <>
      <FavoritesContent />
      <EmailNewsletter {...emailNewsletterTemplate} />
    </>
  );
}
