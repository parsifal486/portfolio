'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
//import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { useLocale } from 'next-intl';

export const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    //const params = useParams();
    const [isPending, startTransition] = useTransition();
    const currentLocale = useLocale();

    const handleLanguageChange = () => {
        console.log('currentLocale===》', currentLocale);
        const nextLocale = currentLocale === 'en' ? 'zh' : 'en';
        console.log('nextLocale===》', nextLocale);

        startTransition(() => {
            // 使用 next-intl 的路由方法
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <label className="relative inline-block h-10 w-20 cursor-pointer">
            <input
                type="checkbox"
                className="h-0 w-0 cursor-pointer opacity-0"
                checked={currentLocale === 'en'}
                onChange={handleLanguageChange}
                disabled={isPending}
            />

            <span className="bg-purplespace-200 absolute inset-0 rounded-full shadow-lg shadow-[#1e3470]/10 transition-all duration-300 ease-[cubic-bezier(0.26,0.48,0.08,0.9)]">
                <span className="absolute top-1/4 left-1/7 z-20 text-base text-white mix-blend-difference select-none">
                    中
                </span>
                <span className="absolute top-1/4 right-1/7 z-20 text-base text-white mix-blend-difference select-none">
                    EN
                </span>
            </span>

            <span
                className={`absolute z-10 h-10 w-10 rounded-full bg-white shadow-lg shadow-[#1e3470]/100 transition-transform duration-300 ease-[cubic-bezier(0.26,0.48,0.08,0.9)] ${
                    currentLocale === 'en' ? 'translate-x-10' : 'translate-x-0'
                }`}
            />
        </label>
    );
};
