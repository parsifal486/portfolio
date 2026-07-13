import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function PostPage(props: {
    params: Promise<{ slug: string }>;
}) {
    const params = await props.params;
    const post = allPosts.find((post) => post.slug === params.slug);
    if (!post) {
        return notFound();
    }

    const keywords = post.keywords
        .split(',')
        .map((keyword) => keyword.trim())
        .filter(Boolean);

    return (
        <article className="mx-auto w-full max-w-2xl px-6 pt-24 pb-24">
            <Link
                href="/#post"
                className="text-font-secondary hover:text-font-emphasize text-sm transition-colors"
            >
                ← Back
            </Link>

            <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
                {post.title}
            </h1>
            <p className="text-font-secondary mt-3 text-sm">
                {format(new Date(post.date), 'MMMM d, yyyy')}
                {keywords.length > 0 && <> · {keywords.join(', ')}</>}
            </p>

            <div
                className="prose mt-12 max-w-none"
                dangerouslySetInnerHTML={{ __html: post.body.html }}
            />
        </article>
    );
}
