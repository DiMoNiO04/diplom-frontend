import { Metadata } from 'next';

import { NotFoundContent } from '@/components/sections';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '404 | YummyNom',
    description: 'Страница не найдена',
  };
}

export default function NotFoundPage() {
  return <NotFoundContent />;
}
