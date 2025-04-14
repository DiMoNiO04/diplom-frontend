import { Suspense } from 'react';

import { getEmailNewsletterTemplate } from '@/actions';
import { EmailNewsletter, SearchResults } from '@/components/sections';

export default async function SearchPage() {
  const emailNewsletterTemplate = await getEmailNewsletterTemplate();

  return (
    <>
      <Suspense fallback={<div>Загрузка...</div>}>
        <SearchResults />
      </Suspense>
      <EmailNewsletter {...emailNewsletterTemplate} />
    </>
  );
}
