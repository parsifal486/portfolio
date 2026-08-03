import {allPosts} from 'contentlayer/generated'
import type {Post} from 'contentlayer/generated'

export async function getAllPostSlugs(): Promise<string[]> {
  return Array.from(new Set(allPosts.map((post) => post.slug)))
}

export async function getPostData(slug: string, locale: string = 'en') {
  return allPosts.find((post) => post.slug === slug && post.locale === locale)
}

// Listings only surface English posts; `.zh.md` versions are reachable
// solely via their /posts/<slug>/zh URL.
export async function getAllPosts(): Promise<Post[]> {
  return allPosts.filter((post) => post.locale !== 'zh').sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  return (await getAllPosts()).filter((post) => post.category === category)
}
