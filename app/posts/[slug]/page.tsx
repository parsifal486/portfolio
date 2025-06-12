import { getPostData } from '@/lib/posts';
import React from 'react';
import { getAllPostSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostData(decodeURIComponent(params.slug));
  if (!post) {
    return notFound();
  }

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-10">
      <article className="w-full max-w-4xl">
        {/* 标题区域 */}
        <div className="mb-8 rounded-xl p-8">
          <h1 className="text-font-emphasize font-inter mb-4 text-4xl md:text-5xl">
            {post.title}
          </h1>
          <div className="mb-4 flex flex-wrap gap-4">
            {post.keywords.map((keyword) => (
              <span
                key={keyword}
                className="border-font-emphasize text-font-primary font-inter rounded-full border-1 px-3 py-1 text-sm"
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
            className="prose prose-invert font-inter text-font-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </article>
    </div>
  );
}
