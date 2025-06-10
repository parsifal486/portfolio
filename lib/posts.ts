import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PostData } from '@/types'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      slug: fileName.replace(/\.md$/, '')
    }
  })
}

export function getPostData(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  
  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    content,
    title: data.title,
    date: data.date,
    description: data.description
  }
}

export function getAllPosts(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    return getPostData(slug)
  })
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}