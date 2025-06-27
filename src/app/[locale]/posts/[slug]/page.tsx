import React from 'react';
import { getAllPostSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';

export async function generateStaticParams() {
    const slugs = await getAllPostSlugs();
    const locales = ['en', 'zh'];

    return locales.flatMap((locale) =>
        slugs.map((slug) => ({
            locale,
            slug,
        }))
    );
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = allPosts.find((post) => post.slug === params.slug);
    if (!post) {
        return notFound();
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 py-10">
            <article className="w-full max-w-4xl">
                {/* 标题区域 */}
                <div className="mb-8 rounded-xl p-8">
                    <h1 className="text-font-emphasize font-inter mb-4 text-4xl md:text-5xl">
                        {post.title}
                    </h1>
                    <div className="mb-4 flex flex-wrap gap-4">
                        {post.keywords.split(',').map((keyword) => (
                            <span
                                key={keyword}
                                className="border-font-emphasize text-font-primary font-inter rounded-full border-2 px-3 py-1 text-sm"
                            >
                                {keyword.trim()}
                            </span>
                        ))}
                    </div>
                    <p className="text-font-secondary font-inter text-sm">
                        {post.date.toString().split(' ').slice(0, 4).join(' ')}
                    </p>
                </div>

                {/* 文章内容 */}
                <div className="rounded-xl p-8">
                    <div
                        className="prose prose-invert font-inter text-font-primary prose-p:leading-relaxed prose-p:my-6 prose-h1:font-outfit prose-h1:text-4xl prose-h1:leading-tight prose-h1:font-bold prose-h1:text-font-emphasize prose-h2:font-roboto prose-h2:text-3xl prose-h2:leading-tight prose-h2:font-semibold prose-h2:text-purplespace-300 prose-h3:font-inter prose-h3:text-2xl prose-h3:leading-tight prose-h3:font-medium prose-h3:text-purplespace-400 prose-h4:font-inter prose-h4:text-xl prose-h4:leading-snug prose-h4:font-medium prose-h4:text-font-primary prose-headings:mt-12 prose-headings:mb-6 prose-li:my-2 prose-li:leading-relaxed prose-ul:my-6 prose-ol:my-6 prose-blockquote:my-8 prose-blockquote:leading-relaxed prose-pre:my-8 prose-pre:p-6 prose-img:my-8 max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.body.html }}
                    />
                </div>
            </article>
        </div>
    );
}
