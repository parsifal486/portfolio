import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { ReactNode } from 'react';

const inter = Inter({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-inter',
});

// Display typeface (rough/textured cut) — used for the name, not body copy.
const hubano = localFont({
    src: './fonts/Hubano-Rough.woff2',
    variable: '--font-hubano',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Ryuteakwoo's blog",
    description: 'love life, enjoy tech🤟',
    icons: {
        icon: '/diamond.svg',
        apple: '/diamond.svg',
    },
};

// Runs before paint to apply the saved theme and avoid a flash of the wrong one.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body className={`${inter.variable} ${hubano.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
