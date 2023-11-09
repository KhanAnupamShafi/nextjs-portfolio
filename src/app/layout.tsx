import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import WrapperClient from './components/WrapperClient';
import './globals.css';

export const viewport = {
  themeColor: '#ffc40d',
};
export const metadata: Metadata = {
  applicationName: 'Anupams Portfolio',
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: '/public/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: [
      { url: '/favicon/apple-touch-icon.png' },
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
      },
    ],
  },
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
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body
        className={` bg-white text-black dark:bg-[#0e1630] dark:text-white  selection:bg-gray-50 dark:selection:bg-gray-800 `}>
        <WrapperClient>{children}</WrapperClient>
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
