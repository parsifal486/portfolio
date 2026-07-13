import React from 'react';
import Link from 'next/link';
import { myWorks } from '@/lib/assets';
import { myWork } from '@/mytypes';

const isExternal = (path: string) => /^https?:\/\//.test(path);

export const Works = () => {
    return (
        <section
            id="works"
            className="border-hairline mx-auto w-full max-w-2xl border-t px-6 py-16"
        >
            <h2 className="text-font-secondary text-xs font-medium tracking-widest uppercase">
                Projects
            </h2>

            <ul className="mt-8 space-y-6">
                {myWorks.map((work: myWork) => {
                    const external = isExternal(work.path);
                    const content = (
                        <>
                            <div className="flex items-baseline justify-between gap-4">
                                <span className="text-font-emphasize font-medium underline-offset-4 group-hover:underline">
                                    {work.title}
                                </span>
                                <span className="text-font-secondary shrink-0 text-sm">
                                    {external ? '↗' : '→'}
                                </span>
                            </div>
                            <p className="text-font-secondary mt-1 text-sm leading-relaxed">
                                {work.description}
                            </p>
                        </>
                    );

                    return (
                        <li key={work.index}>
                            {external ? (
                                <a
                                    href={work.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block"
                                >
                                    {content}
                                </a>
                            ) : (
                                <Link href={work.path} className="group block">
                                    {content}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
