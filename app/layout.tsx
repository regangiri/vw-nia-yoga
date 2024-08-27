import type { Metadata } from 'next';
import { Inter, Baskervville, Roboto_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const baskervville = Baskervville({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-baskervville',
});

export const metadata: Metadata = {
  title: 'Nia and Yoga Wedding Invitation',
  description: 'Nia and Yoga Wedding Invitation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto_mono.variable} ${inter.variable} ${baskervville.variable} scrollbar-hide`}
    >
      <body>{children}</body>
    </html>
  );
}
