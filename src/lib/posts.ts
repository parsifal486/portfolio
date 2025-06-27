import {allPosts} from 'contentlayer/generated'




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