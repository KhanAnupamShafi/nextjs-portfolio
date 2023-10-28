import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Alegreya, Noto_Sans } from 'next/font/google';
import Header from './components/Header';
import { Providers } from './components/Provider';
import './globals.css';

const noto = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
  weight: '500',
});
const alegreya = Alegreya({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alegreya-sans',
});

export const metadata: Metadata = {
  title: "Anupam's Portfolio",
  description:
    'Explore Anupams Portfolio, showcasing the work of a talented Front-end Developer. Discover a collection of web development projects and design expertise.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${alegreya.variable} ${noto.variable} bg-white text-black dark:bg-[#0e1630] dark:text-white  selection:bg-gray-50 dark:selection:bg-gray-800 overflow-y-hidden`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
      <Analytics />
    </html>
  );
}

// className={clsx(
//   alegreya.variable,
//   noto.variable,
//   'bg-white text-black',
//   'dark:bg-[#090908] dark:text-white',
//   'h-full selection:bg-gray-50 dark:selection:bg-gray-800'
// )}
