import {allPosts} from 'contentlayer/generated'

export async function getAllPostSlugs(): Promise<string[]> {
  return Array.from(new Set(allPosts.map((post) => post.slug)))
}

export async function getPostData(slug: string) {
  return allPosts.find((post) => post.slug === slug)
}

export async function getAllPosts() {
  return allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}