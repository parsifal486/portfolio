import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
    title: 'Adventure of my life · Ryuteakwoo',
};

export default async function LifePage() {
    const posts = await getAllPosts();

    return (
        <section className="mx-auto w-full max-w-2xl px-6 pt-24 pb-24">
            <Link
                href="/"
                className="text-font-secondary hover:text-font-emphasize text-sm transition-colors"
            >
                ← Back
            </Link>

            <h1 className="mt-8 text-3xl font-semibold tracking-tight">
                Adventure of my life
            </h1>

            <ul className="mt-10 space-y-4">
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
