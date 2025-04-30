import { Suspense } from 'react';

import { EmailNewsletter, SearchResults } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { breadcrumbsSearchPage } from '@/utils/breadcrumbs';

export default async function SearchPage() {
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsSearchPage} />
      <Suspense fallback={<div>Загрузка...</div>}>
        <SearchResults />
      </Suspense>
      <EmailNewsletter />
    </>
  );
}
