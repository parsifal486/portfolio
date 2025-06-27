'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import type { Post as ContentLayerPost } from 'contentlayer/generated';

type PostsProps = {
    posts: ContentLayerPost[];
};

export function Posts({ posts }: PostsProps) {
    const locale = useLocale();
    const t = useTranslations('posts');

    return (
        <div
            id="post"
            className="mx-auto flex w-11/12 flex-col items-start justify-center"
        >
            <div className="text-font-emphasize font-inter text-3xl">{t('title')}</div>
            <div className="flex flex-col items-start justify-center">
                <ul>
                    {posts.map((post) => (
                        <li
                            key={post.slug}
                            className="frostglass group relative my-10 p-5 transition-all duration-400"
                        >
                            <Link
                                href={`/${locale}/posts/${encodeURIComponent(post.slug)}`}
                                className="group-hover:text-font-emphasize"
                            >
                                {post.title}
                            </Link>

                            <div className="text-font-primary font-inter text-m mt-2 transition-colors">
                                {post.description}
                            </div>

                            <div className="mt-5 flex flex-row flex-wrap items-center justify-start gap-3">
                                {post.keywords
                                    .split(',')
                                    .slice(0, 3)
                                    .map((keyword) => (
                                        <span
                                            key={keyword}
                                            className="border-font-emphasize text-font-primary font-inter rounded-full border-1 px-3 py-1 text-sm"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                            </div>

                            <div className="text-font-secondary font-inter mt-2 text-sm">
                                {t('publishedOn')}:{' '}
                                {post.date.toString().split(' ').slice(0, 4).join(' ')}
                            </div>

                            <Link
                                href={`/${locale}/posts/${post.slug}`}
                                className="text-font-emphasize font-inter mt-4 inline-block hover:underline"
                            >
                                {t('readMore')}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
