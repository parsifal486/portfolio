import type { Metadata } from 'next';
import { Roboto, Outfit, Ovo, Inter } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ReactNode } from 'react';
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
        icon: '/diamond.svg',
        apple: '/diamond.svg',
    },
};

interface PageProps {
    params: { locale: string };
    children: ReactNode;
}

export default async function RootLayout({ children, params }: PageProps) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${roboto.variable} ${outfit.variable} ${ovo.variable} ${inter.variable} antialiased`}
            >
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </body>
        </html>
    );
}
