import { Metadata } from 'next';

import { apiGetUserInfo } from '@/actions/user';
import { ProfileContent } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui';
import { breadcrumbsProfilePage } from '@/utils/breadcrumbs';
import { createMetadata, ISEO } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const seo: ISEO = {
    metaTitle: 'Личный кабинет | YummyNom',
    metaDescription: 'Управляйте своими данными, просматривайте активность и настраивайте профиль в личном кабинете.',
    keywords: 'личный кабинет, профиль, аккаунт, пользователь',
    metaRobots: null,
    canonicalURL: `profile`,
    metaImage: null,
    openGraph: {
      title: 'Личный кабинет | YummyNom',
      description: 'Просматривайте и редактируйте свою информацию в личном кабинете.',
      url: `profile`,
      type: 'website',
    },
  };

  return createMetadata(seo);
}

export default async function ProfilePage() {
  const dataUser = await apiGetUserInfo();

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsProfilePage} />
      <ProfileContent {...dataUser} />;
    </>
  );
}
