'use client';
import React from 'react';
import { myWorks } from '@/public/assets';
import { myWork } from '@/mytypes';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export const Works = () => {
    const currentLocale = useLocale();
    const filteredWorks = myWorks.filter(
        (work) => work.language.toLowerCase() === currentLocale
    );
    const router = useRouter();
    return (
        <div
            id="works"
            className="mx-auto flex w-11/12 flex-col items-start justify-center"
        >
            <div className="text-font-emphasize font-inter text-3xl">Projects</div>
            <div className="flex w-full flex-col items-center justify-center">
                {filteredWorks.map((work: myWork) => (
                    <div
                        key={work.index}
                        className="frostglass group bg-purplespace-200/30 relative my-10 flex w-full flex-col rounded-xl p-10 transition-all duration-400 md:flex-row md:items-center md:justify-between md:bg-transparent"
                        onClick={() => {
                            if (work.path) {
                                router.push(work.path);
                            }
                        }}
                    >
                        <div className="flex flex-row items-center justify-center">
                            <div className="relative h-20 w-20 rounded-xl md:h-30 md:w-30">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="rounded-xl"
                                    sizes="100%"
                                />
                            </div>
                            <div className="ml-10 flex-1">
                                <div className="text-font-primary font-inter group-hover:text-font-emphasize text-2xl transition-colors">
                                    {work.title}
                                </div>
                                <div className="text-font-primary font-inter text-m mt-2 transition-colors">
                                    {work.description}
                                </div>

                                <div className="mt-5 hidden flex-row flex-wrap items-center justify-start gap-3 md:flex">
                                    {work.keywords.slice(0, 3).map((keyword: string) => (
                                        <div
                                            key={keyword}
                                            className="bg-emphasize-transparent text-font-primary font-inter rounded-full px-3 py-1 text-sm"
                                        >
                                            {keyword}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-row flex-wrap items-center justify-start gap-3 md:hidden">
                            {work.keywords.slice(0, 3).map((keyword: string) => (
                                <div
                                    key={keyword}
                                    className="bg-emphasize-transparent text-font-primary font-inter rounded-full px-3 py-1 text-sm"
                                >
                                    {keyword}
                                </div>
                            ))}
                        </div>

                        <div className="mt-3 h-40 w-70 rounded-xl md:h-90 md:w-140">
                            {work.descriptionPic && (
                                <div className="relative h-40 w-70 md:h-90 md:w-140">
                                    <Image
                                        src={work.descriptionPic}
                                        alt={work.title}
                                        fill
                                        className="rounded-xl"
                                        sizes="100%"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
