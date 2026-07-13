import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import type { Post as ContentLayerPost } from 'contentlayer/generated';

type PostsProps = {
    posts: ContentLayerPost[];
};

export function Posts({ posts }: PostsProps) {
    return (
        <section
            id="post"
            className="border-hairline mx-auto w-full max-w-2xl border-t px-6 py-16"
        >
            <h2 className="text-font-secondary text-xs font-medium tracking-widest uppercase">
                Writing
            </h2>

            <ul className="mt-8 space-y-6">
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
