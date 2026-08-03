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
    // A `<slug>.zh.md` file is the hidden Chinese version of `<slug>.md`,
    // served at /posts/<slug>/zh and excluded from all listings.
    locale: {
      type: 'string',
      resolve: (doc) => (doc._raw.sourceFileName.endsWith('.zh.md') ? 'zh' : 'en'),
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/(\.zh)?\.md$/, ''),
    },
    url: {
      type: 'string',
      resolve: (doc) => {
        const slug = doc._raw.sourceFileName.replace(/(\.zh)?\.md$/, '');
        return doc._raw.sourceFileName.endsWith('.zh.md') ? `/posts/${slug}/zh` : `/posts/${slug}`;
      },
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
