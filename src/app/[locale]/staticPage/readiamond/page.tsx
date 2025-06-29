'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { icon } from '@/public/assets';

export default function ReadiamondPage() {
    const t = useTranslations('readiamond');

    return (
        <div className="bg-purplespace-100 flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
            <div className="frostglass flex w-full max-w-4xl flex-col items-center rounded-xl p-6 md:p-10">
                <h1 className="text-font-emphasize font-inter mb-8 text-3xl font-bold md:text-4xl">
                    Readiamond
                </h1>

                <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-xl md:h-[400px]">
                    <Image
                        src="/imgs/readiamonddiscription.png"
                        alt="Readiamond Description"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                    />
                </div>

                <div className="text-font-primary font-inter mb-8 text-center text-lg">
                    {t('description')}
                </div>

                <a
                    href="https://github.com/parsifal486/readiamond/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purplespace-200 hover:bg-purplespace-300 flex items-center gap-2 rounded-full px-6 py-3 text-lg font-semibold text-white transition-all"
                >
                    <icon.download size={24} />
                    {t('download')}
                </a>
            </div>
        </div>
    );
}
