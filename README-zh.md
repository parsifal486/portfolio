# Ryuteakwoo 的个人作品集

<div align="center">
  <h1>ryuteakwoo.com</h1>
  <p>
    使用 <a href="https://nextjs.org/" target="_blank">Next.js 15</a>、<a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> 和 <a href="https://contentlayer.dev/" target="_blank">Contentlayer</a> 构建的个人作品集网站。
  </p>
  <p>
    <a href="README.md">English</a> | <a href="README-zh.md">简体中文</a>
  </p>
</div>

![demo](/public/imgs/portfolio.png)

## 🛠 技术栈

- [Next.js 15](https://nextjs.org/) - React 生产级框架（App Router）
- [React 19](https://react.dev/) - UI 库
- [Tailwind CSS v4](https://tailwindcss.com/) - 样式解决方案
- [Contentlayer](https://contentlayer.dev/) - 内容管理
- [next-intl](https://next-intl-docs.vercel.app/) - 国际化支持
- [TypeScript](https://www.typescriptlang.org/) - 类型安全

## 🌟 特性

- 📱 响应式设计
- 🌍 国际化支持（中文和英文）
- 📝 Markdown 博客文章
- 🎨 自定义设计系统
- ⚡ 快速页面加载
- 🔍 SEO 优化

## 📂 项目结构

```
├── src/
│   ├── app/[locale]/      # Next.js App Router（按 locale 划分路由）
│   │   ├── components/    # React 组件
│   │   ├── posts/[slug]/  # 博客文章路由
│   │   ├── staticPage/    # 独立页面
│   │   └── globals.css    # 全局样式
│   ├── i18n/              # next-intl 路由与请求配置
│   ├── lib/               # 工具函数
│   └── mytypes/           # 共享 TypeScript 类型
├── public/                # 静态资源
├── content/posts/         # Markdown 博客文章
├── messages/              # 国际化翻译文件（en.json、zh.json）
└── contentlayer.config.ts # Contentlayer 数据模型
```

## 🚀 快速开始

1. 克隆仓库

    ```bash
    git clone https://github.com/parsifal486/portfolio
    ```

2. 安装依赖

    ```bash
    npm install
    ```

3. 启动开发服务器

    ```bash
    npm run dev
    ```

4. 生产环境构建
    ```bash
    npm run build
    ```

## 📝 说明

这是我的个人作品集网站。虽然代码是开源的，但如果你使用它作为参考，求你请注明出处🙏。这个网站的设计和实现花费了大量的精力。

## 📫 联系方式

- 网站：[ryuteakwoo.com](https://ryuteakwoo.com)
- GitHub：[@parsifal486](https://github.com/parsifal486)
- 邮箱：mrliuzeyou@outlook.com

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE) 开源。
