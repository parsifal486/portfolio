# Ryuteakwoo's Portfolio

<div align="center">
  <h1>ryuteakwoo.com</h1>
  <p>
    My personal portfolio website built with <a href="https://nextjs.org/" target="_blank">Next.js 15</a>, <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>, and <a href="https://contentlayer.dev/" target="_blank">Contentlayer</a>.
  </p>
</div>

![demo](/public/imgs/portfolio.png)

## 🛠 Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework for production (App Router)
- [React 19](https://react.dev/) - UI library
- [Tailwind CSS v4](https://tailwindcss.com/) - For styling
- [Contentlayer](https://contentlayer.dev/) - Content management
- [TypeScript](https://www.typescriptlang.org/) - For type safety

## 🌟 Features

- 📱 Responsive Design
- 📝 MD Blog Posts
- 🎨 Custom Design System
- ⚡ Fast Page Loads
- 🔍 SEO Optimized

## 📂 Project Structure

```
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── components/    # React components
│   │   ├── posts/[slug]/  # Blog post route
│   │   ├── staticPage/    # Standalone pages
│   │   └── globals.css    # Global styles
│   ├── lib/               # Utility functions
│   └── mytypes/           # Shared TypeScript types
├── public/                # Static assets
├── content/posts/         # Markdown blog posts
└── contentlayer.config.ts # Contentlayer schema
```

## 🚀 Getting Started

1. Clone this repository

    ```bash
    git clone https://github.com/parsifal486/portfolio
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Start the development server

    ```bash
    npm run dev
    ```

4. Build for production
    ```bash
    npm run build
    ```

## 📝 Notes

This is my personal portfolio website. While the code is open source, please give credit if you use it as a reference. The design and implementation took significant effort to create.

## 📫 Contact

- Website: [ryuteakwoo.com](https://ryuteakwoo.com)
- GitHub: [@parsifal486](https://github.com/parsifal486)
- Email: mrliuzeyou@outlook.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
