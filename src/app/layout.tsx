import '../styles/index.css';

import { Onest, Unbounded } from 'next/font/google';

import { Footer, Header, Modals } from '@/components/layouts';
import { NotificationMsg } from '@/components/ui';
import { BtnScroll } from '@/components/ui/btns';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${fontUnbounded.variable} ${fontOnest.variable}`}>
        <Header />
        <main className="mt-24 max-md:mt-16">{children}</main>
        <Footer />
        <Modals />
        <NotificationMsg />
        <BtnScroll />
      </body>
    </html>
  );
}
