import { Metadata } from 'next';

import { apiGetUserInfo } from '@/actions/user';
import { ProfileContent } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { breadcrumbsProfilePage } from '@/utils/breadcrumbs';
import { createMetadata } from '@/utils/seo';
import { seoProfilePage } from '@/utils/seo/seoData';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata(seoProfilePage());
}

export default async function ProfilePage() {
  const dataUser = await apiGetUserInfo();

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsProfilePage} />
      {dataUser && <ProfileContent {...dataUser} />}
    </>
  );
}
