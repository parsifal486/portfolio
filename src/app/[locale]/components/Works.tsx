import React from 'react';
import { myWorks } from '@/public/assets';
import { myWork } from '@/types';
import Image from 'next/image';
import { useLocale } from 'next-intl';

export const Works = () => {
    const currentLocale = useLocale();
    const filteredWorks = myWorks.filter(
        (work) => work.language.toLowerCase() === currentLocale
    );

    return (
        <div id="works" className="flex flex-col items-center justify-center">
            <div className="flex w-11/12 flex-col items-start justify-center md:ml-50">
                <div className="text-font-emphasize font-inter text-3xl">My Works</div>
                {filteredWorks.map((work: myWork) => (
                    <div
                        key={work.index}
                        className="frostglass group relative my-10 flex flex-col items-start justify-center p-5 transition-all duration-400 md:flex-row"
                    >
                        <div className="flex flex-row items-center justify-center">
                            <div className="relative h-25 w-25 rounded-xl md:h-30 md:w-30">
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
                    </div>
                ))}
            </div>
        </div>
    );
};
