import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import remarkGfm from 'remark-gfm';
const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/**/*.md',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    author: { type: 'string', required: true },
    keywords: { type: 'string', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, ''),
    },
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.sourceFileName.replace(/\.md$/, '')}`,
    },
    // Category is derived from the folder under content/posts (life | craft | archive).
    category: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileDir.split('/')[1] ?? 'life',
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
  onSuccess: async (importData) => {
    console.log('Contentlayer build successful', importData);
  },
});
