import React from 'react';
import { img } from '@/public/assets';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const HomeSection = () => {
    const t = useTranslations('home');

    return (
        <div
            id="home"
            className="mx-auto flex h-screen w-11/12 flex-col items-center justify-center md:flex-row md:justify-start md:pl-40"
        >
            <div className="margin-5 hover:border-font-emphasize relative ml-50 h-40 w-40 overflow-hidden rounded-full hover:border-2 md:mr-10 md:ml-0 md:h-110 md:w-80 md:rounded-2xl">
                <Image
                    className="h-full object-cover"
                    sizes="100%"
                    fill
                    src={img.avatar}
                    alt="avatar"
                />
                <div className="bg-emphasize-transparent transition-ease-in-out absolute top-0 left-0 hidden h-full w-full opacity-0 transition-all duration-300 hover:opacity-100 md:block">
                    <div className="flex h-full w-full items-end justify-center">
                        <div className="text-font-primary border-font-emphasize hover:bg-purplespace-200 mb-10 rounded-xl border-2 px-4 py-2 text-2xl transition-all duration-300">
                            {t('getResume')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-3 flex flex-col">
                <div className="text-font-emphasize font-inter text-3xl">
                    {t('greeting')}{' '}
                    <span className="text-font-primary text-2xl">{t('im')}</span>
                </div>
                <div className="font-outfit text-font-primary my-8 text-6xl font-semibold">
                    {t('name')}
                </div>
                <div className="font-inter text-font-primary text-4xl">{t('role')}</div>
                <div className="font-inter text-font-secondary mt-3 text-lg">
                    {t('passion')}
                </div>
                <div className="font-inter text-font-secondary mt-3 text-lg">
                    {t('description')}
                </div>
            </div>
        </div>
    );
};
