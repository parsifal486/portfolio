import {allPosts} from 'contentlayer/generated'
import type {Post} from 'contentlayer/generated'

type Locale = 'en' | 'zh'

export async function getAllPostSlugs(): Promise<string[]> {
  return Array.from(new Set(allPosts.map((post) => post.slug)))
}

export async function getPostData(slug: string) {
  return allPosts.find((post) => post.slug === slug)
}

export async function getAllPosts(locale?: Locale): Promise<Post[]> {
  const posts = locale
    ? allPosts.filter((post) => post.language === locale)
    : allPosts

  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
