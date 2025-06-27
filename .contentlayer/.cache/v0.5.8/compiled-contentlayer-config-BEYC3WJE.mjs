// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/**/*.md",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    author: { type: "string", required: true },
    keywords: { type: "string", required: true },
    language: { type: "string", required: true, options: ["en", "zh"] }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, "")
    },
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.sourceFileName.replace(/\.md$/, "")}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: []
  },
  onSuccess: async (importData) => {
    console.log("Contentlayer build successful", importData);
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-BEYC3WJE.mjs.map
