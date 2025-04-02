import { Suspense } from 'react';

import { EmailNewsletter, SearchResults } from '@/components/sections';

export default function SearchPage() {
  return (
    <>
      <Suspense fallback={<div>Загрузка...</div>}>
        <SearchResults />
      </Suspense>
      <EmailNewsletter />
    </>
  );
}
