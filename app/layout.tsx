import type { Metadata } from 'next';
import { Roboto, Outfit, Ovo, Inter } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const outfit = Outfit({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-outfit',
});

const ovo = Ovo({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-ovo',
});

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Ryuteakwoo's blog",
  description: 'love life, enjoy tech🤟',
  icons: {
    icon: '/dimond1.svg',
    apple: '/dimond1.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} ${outfit.variable} ${ovo.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
