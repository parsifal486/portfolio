import type { Metadata } from 'next';
import { Roboto, Outfit, Ovo } from 'next/font/google';
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

export const metadata: Metadata = {
  title: "Ryuteakwoo's blog",
  description: 'love life, enjoy tech🤟',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} ${outfit.variable} ${ovo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
