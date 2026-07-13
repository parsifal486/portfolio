import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { getAllPosts } from '@/lib/posts';
import { myWorks } from '@/lib/assets';
import { myWork } from '@/mytypes';

export const metadata = {
    title: 'Archive · Ryuteakwoo',
};

const isExternal = (path: string) => /^https?:\/\//.test(path);

export default async function ArchivePage() {
    const posts = await getAllPosts();
    // Readiamond has its own home; list everything else here.
    const projects = myWorks.filter((work) => work.title !== 'readiamond');

    return (
        <section className="mx-auto w-full max-w-2xl px-6 pt-24 pb-24">
            <Link
                href="/"
                className="text-font-secondary hover:text-font-emphasize text-sm transition-colors"
            >
                ← Back
            </Link>

            <h1 className="mt-8 text-3xl font-semibold tracking-tight">Archive</h1>

            <h2 className="text-font-secondary mt-12 text-xs font-medium tracking-widest uppercase">
                Projects
            </h2>
            <ul className="mt-6 space-y-4">
                {projects.map((work: myWork) => {
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

            <h2 className="text-font-secondary mt-12 text-xs font-medium tracking-widest uppercase">
                Writing
            </h2>
            <ul className="mt-6 space-y-4">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link
                            href={`/posts/${encodeURIComponent(post.slug)}`}
                            className="group block"
                        >
                            <div className="flex items-baseline justify-between gap-4">
                                <span className="text-font-emphasize font-medium underline-offset-4 group-hover:underline">
                                    {post.title}
                                </span>
                                <time className="text-font-secondary shrink-0 text-sm">
                                    {format(new Date(post.date), 'MMM yyyy')}
                                </time>
                            </div>
                            <p className="text-font-secondary mt-1 text-sm leading-relaxed">
                                {post.description}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
