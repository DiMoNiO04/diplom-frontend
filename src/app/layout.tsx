import '../styles/index.css';

import { Onest, Unbounded } from 'next/font/google';

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
      <body className={`${fontUnbounded.variable} ${fontOnest.variable}`}>{children}</body>
    </html>
  );
}
