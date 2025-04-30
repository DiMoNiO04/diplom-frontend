import '../styles/index.css';

import { Onest, Unbounded } from 'next/font/google';
import { ReactNode } from 'react';

import { apiGetRecipes } from '@/actions/recipes';
import { Footer, Header, Modals } from '@/components/layouts';
import { NotificationMsg } from '@/components/ui';
import { BtnScroll } from '@/components/ui/btns';
import { TokenProvider } from '@/providers';
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
  const { results: recipes } = await apiGetRecipes();

  return (
    <html lang="ru">
      <body className={`${fontUnbounded.variable} ${fontOnest.variable}`}>
        <TokenProvider>
          <Header recipes={recipes} />
          <main className="mt-24 max-md:mt-16">{children}</main>
          <Footer />
          <Modals />
          <NotificationMsg />
          <BtnScroll />
        </TokenProvider>
      </body>
    </html>
  );
}
