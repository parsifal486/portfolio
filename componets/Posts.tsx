import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export const Posts = () => {
  const posts = getAllPosts();
  return (
    <div id="post" className="flex flex-col items-center justify-center">
      <div className="flex w-11/12 flex-col items-start justify-center md:ml-50">
        <div className="text-font-emphasize font-inter text-3xl">My Posts</div>
        <ul>
          {posts.map((post) => (
            <li
              key={post.slug}
              className="frostglass group relative my-10 p-5 transition-all duration-400"
            >
              <Link
                href={`/posts/${encodeURIComponent(post.slug)}`}
                className="group-hover:text-font-emphasize"
              >
                {post.title}
              </Link>

              <div className="text-font-primary font-inter text-m mt-2 transition-colors">
                {post.description}
              </div>

              <div className="mt-5 flex flex-row flex-wrap items-center justify-start gap-3">
                {post.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="border-font-emphasize text-font-primary font-inter rounded-full border-1 px-3 py-1 text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
