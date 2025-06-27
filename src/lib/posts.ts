import {allPosts} from 'contentlayer/generated'

export async function generateStaticParams() {
  // 确保返回所有可能的路径组合
  const posts = allPosts
  const locales = ['en', 'zh']
  
  return locales.flatMap(locale => 
    posts.map(post => ({
      locale,
      slug: post.slug
    }))
  )
}

export function getAllPostSlugs(): string[] {
  return Array.from(new Set(allPosts.map((post) => post.slug)))
}

export function getPostData(slug: string) {
  return allPosts.find((post) => post.slug === slug)
}

export function getAllPosts() {
  return allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}