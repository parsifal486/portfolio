import React from 'react';
import Link from 'next/link';
import { getPostsByCategory } from '@/lib/posts';
import { PostList } from '@/components/PostList';

export const metadata = {
    title: 'Explorations in craft · Ryuteakwoo',
};

export default async function CraftPage() {
    const posts = await getPostsByCategory('craft');

    return (
        <section className="mx-auto w-full max-w-2xl px-6 pt-24 pb-24">
            <Link
                href="/"
                className="text-font-secondary hover:text-font-emphasize text-sm transition-colors"
            >
                ← Back
            </Link>

            <h1 className="mt-8 text-3xl font-semibold tracking-tight">
                Explorations in craft
            </h1>

            {posts.length > 0 ? (
                <PostList posts={posts} className="mt-10" />
            ) : (
                <p className="text-font-secondary mt-10">Nothing here yet.</p>
            )}
        </section>
    );
}
