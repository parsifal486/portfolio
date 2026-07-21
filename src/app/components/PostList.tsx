import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import type { Post } from 'contentlayer/generated';

type PostListProps = {
    posts: Post[];
    className?: string;
};

export const PostList = ({ posts, className = '' }: PostListProps) => {
    return (
        <ul className={`space-y-4 ${className}`.trim()}>
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
    );
};
