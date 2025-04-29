import '../styles/index.css';

import { Onest, Unbounded } from 'next/font/google';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';

import { Footer, Header, Modals } from '@/components/layouts';
import { NotificationMsg } from '@/components/ui';
import { BtnScroll } from '@/components/ui/btns';
import { UserProvider } from '@/providers';
import { createViewport } from '@/utils/seo';

export const generateViewport = () => createViewport();

const fontUnbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-unbounded',
});

const fontOnest = Onest({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-onest',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get('jwt')?.value;

  return (
    <html lang="ru">
      <body className={`${fontUnbounded.variable} ${fontOnest.variable}`}>
        <UserProvider token={token}>
          <Header />
          <main className="mt-24 max-md:mt-16">{children}</main>
          <Footer />
          <Modals />
          <NotificationMsg />
          <BtnScroll />
          123
        </UserProvider>
      </body>
    </html>
  );
}
