import { Metadata } from 'next';

import { NotFoundContent } from '@/components/sections';
import { seoNotFoundPage } from '@/utils/seo/seoData';

export const metadata: Metadata = seoNotFoundPage();

export default function NotFoundPage() {
  return <NotFoundContent />;
}
