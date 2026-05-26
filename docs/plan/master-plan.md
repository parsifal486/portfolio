# Master Plan — readiamond Subpage SEO (Tier 1 · #1 + #2)

Created: 2026-05-26
Status: draft (not yet executing)

---

## Goal

让 `https://readiamond.ryuteakwoo.com/{en,zh}` 这两个落地页拥有:

1. **页面专属、按 locale 本地化的 `<title>` 与 `<meta name="description">`**(取代当前继承自根 `layout.tsx` 的 `"Ryuteakwoo's blog"` / `"love life, enjoy tech🤟"`,两者均与 readiamond 完全无关)。
2. **完整的 Open Graph + Twitter Card 元数据**(含 OG 图),使 Twitter / Slack / Discord / WhatsApp / iMessage / LinkedIn 分享链接时能正确显示预览卡。

完成后,Google 搜索结果中 readiamond 子域名的标题/摘要正确,社交平台分享显示预期的产品图与文案。

---

## Scope

### In scope

- 重构 `src/app/[locale]/staticPage/readiamond/page.tsx`:拆为 server wrapper(导出 `generateMetadata`)+ client body(保留现有 `'use client'` 逻辑)
- 新增 `messages/{en,zh}.json` 里的 SEO 专属 key(在 `readiamond` 命名空间下)
- 在 `generateMetadata` 内输出 Next.js Metadata 对象,字段覆盖:
  - `title`、`description`
  - `openGraph.{title,description,url,siteName,locale,type,images}`
  - `twitter.{card,title,description,images}`
- 选定并就位 1 张 OG 图(1200×630 推荐;若沿用现有截图需评估裁剪)
- 双 locale(EN + ZH)都本地化

### Out of scope(后续单独计划)

- Tier 1 #3 canonical URL
- Tier 1 #4 hreflang(EN/ZH 互链)
- Tier 1 #5 `<html lang={locale}>` 跟随 locale
- Tier 2 全部:JSON-LD 结构化数据 / `robots.txt` / `sitemap.xml` / 真实 `favicon.ico`
- 把整个 readiamond 页从 client 转为 server(架构层面的"client-everywhere"修复,影响面更大)
- 其它路由(主站首页、博客、其它 staticPage)的 SEO 元数据

---

## Module breakdown

### Module A — Page restructure(server wrapper + client body)

**Why**:Next.js Metadata API 要求 `export const metadata` 或 `export async function generateMetadata` 必须在 server component;当前 page.tsx 顶部是 `'use client'`,无法直接导出。

**Files**:
- `src/app/[locale]/staticPage/readiamond/page.tsx` → 改为 server component,只做两件事:
  1. `export async function generateMetadata({ params })`
  2. `return <ReadiamondClient />`
- `src/app/[locale]/staticPage/readiamond/_client.tsx` → 新建,把现有 page.tsx 的所有 `'use client'` 内容原样搬入,默认导出 `ReadiamondClient` 组件
- import 路径相应调整(`useTranslations` 等都还在 _client.tsx 里)

**风险**:轻度;两个文件、单页拆分,无业务逻辑变化。

### Module B — Translation keys for SEO

**Why**:title / description 应按语言本地化,逻辑放进 `messages/*.json`,不在代码里硬编码。

**Files**:`messages/en.json`、`messages/zh.json`

**新增 keys**(都放在 `readiamond` 命名空间下):
- `seoTitle` — 搜索结果用的页面标题(50~60 字符)
- `seoDescription` — 搜索结果与 OG 摘要共用(150~160 字符)
- `ogImageAlt` — OG 图的替代文本(对盲屏读者 + 部分平台显示)

**讨论**:能否复用现有的 `readiamond.description` / `readiamond.heroDescription`?可以,但 SEO 文案的目标(关键词覆盖、字数限制、call-to-attention)与展示文案常常不同。建议**新增专用 key**,但允许在 plan 落实阶段视实际撰写效果决定是否复用。

### Module C — `generateMetadata` 实现

**Why**:把模块 A 与 B 拼起来,产出真正的 `<head>`。

**Files**:`src/app/[locale]/staticPage/readiamond/page.tsx`(模块 A 创建的 server 文件内)

**实现要点**:
- 函数签名:`async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata>`
- await `params` 拿到 locale
- `import { getTranslations } from 'next-intl/server'`,`const t = await getTranslations({ locale, namespace: 'readiamond' })`
- 返回的 Metadata 对象结构(具体值由模块 B 提供):

```
{
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://readiamond.ryuteakwoo.com/' + locale,
    siteName: 'readiamond',
    locale: locale === 'zh' ? 'zh_CN' : 'en_US',
    type: 'website',
    images: [{ url, width, height, alt }],
  },
  twitter: {
    card: 'summary_large_image',  // 或 'summary'(若 OG 图为正方形)
    title,
    description,
    images: [url],
  },
}
```

**注意**:
- OG 图 URL 必须是绝对 URL(`https://...`),不能用相对路径,否则部分平台抓取失败
- `openGraph.url` 同理使用子域名绝对路径,告诉抓取器 canonical 入口

### Module D — OG 图资产

**Why**:OG 卡片的视觉核心。OG 图决定分享时的"第一印象"。

**当前可用素材**(已查):

| 文件 | 尺寸 | 适合 OG? |
|------|------|---------|
| `public/imgs/readiamond.png` | 512×512 | 仅适合 Twitter `summary`(小卡片) |
| `public/readiamond-img/main-content.png` | 2224×1624(1.37:1) | 可用,但 1.91:1 OG 会中心裁剪 |
| `public/readiamond-img/dashboard.png` | 2224×1624 | 同上 |
| `public/readiamond-img/flash-cardReview.png` | 2224×1624 | 同上 |
| `public/readiamond-img/ai-feature.png` | 1610×546(2.95:1) | 过宽,不行 |
| `public/readiamond-img/setting-page.png` | 2224×1624 | 同上 |
| `public/imgs/readiamond.svg` | 矢量 | OG 不支持 SVG;某些抓取器会失败 |

**选项**:
- **A. 沿用 `main-content.png`** —— 0 改动,但被裁剪后可能丢标题/侧边栏
- **B. 现做一张 `og-readiamond.png`(1200×630)** —— 视觉最佳,但需要离线 Figma/Photoshop 设计;放进 `public/og/`
- **C. 用 Next.js 14+ 的 `opengraph-image.tsx`(动态生成)** —— 在 `staticPage/readiamond/` 目录下加 `opengraph-image.tsx`,Next 自动生成。可读 messages,locale 化,产物自动随 build 流。**长期最优**,初期一次性投入

**默认推荐**:**先选 A**(立刻可用),将 C 列为后续迭代;若用户希望一步到位选 B 或 C,plan 会相应扩展。

### Module E — 验证

**Why**:SEO 改动若未在真实平台抓取器下测试,常常"看着对、分享后空白"。

**步骤**:
1. **本地 build**:`npm run build` 通过,无类型错误
2. **本地源码 grep**:`grep -nE "openGraph|twitter|generateMetadata"` 确认改动落地
3. **本地 curl 抓 HTML**(从 dev server 或 staging):
   - `<title>` 内容正确(EN 一份、ZH 一份)
   - `<meta name="description">` 内容正确
   - `<meta property="og:*">` 6 个核心字段齐全
   - `<meta name="twitter:*">` 4 个核心字段齐全
4. **绝对路径检查**:`og:image` 与 `og:url` 都是 `https://readiamond.ryuteakwoo.com/...` 完整 URL
5. **生产环境验证(待 deploy 后)**:
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - Facebook OG Debugger: https://developers.facebook.com/tools/debug/
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
6. **真实分享 smoke test**:在 Slack DM 自己 / iMessage 自己粘贴链接,看预览是否出图

---

## Parallelizable work

下面这几条**可以同时进行**(不同 contributor 或同一人但不交叉文件):

- **Module B**(在 `messages/*.json` 加 key 与写文案)
- **Module D**(挑选/制作 OG 图)
- Module B 与 D 都是 Module C 的依赖,可在 A 之前并行进行

---

## Sequential dependencies

```
A (page restructure) ──┐
B (messages keys) ─────┼──→ C (generateMetadata) ──→ E (验证)
D (OG image)     ──────┘
```

- C 必须等 A 完成(因为要在新的 server page.tsx 里写)
- C 必须等 B 完成(没有 key 就读不到文案)
- C 必须等 D 完成(没有图就没有可填的 `images[].url`)
- E 等 C 完成

关键路径:**A → C → E**(B 与 D 在 A 进行的同时完成即可)。

---

## Risks

| # | 风险 | 影响 | 缓解 |
|---|------|------|------|
| R1 | 拆 server/client 后,client 子树的 `useTranslations` / Next Image / `useRouter` 仍正常工作 | 高(页面渲染失败) | 拆分时保持 `'use client'` 文件 100% 与原文件等价,只移动文件不改逻辑;Module E 抓 HTML 验证 |
| R2 | OG 图被平台裁剪导致核心信息丢失(尤其 main-content.png 是 1.37:1,被裁成 1.91:1 会丢上下) | 中(分享卡难看但可用) | 优先选屏幕中心包含产品 logo 的截图;若效果差,升级到 Module D 的方案 B/C |
| R3 | `og:image` 用了相对路径,Twitter/FB 抓取失败 | 高(分享卡空白) | Module C 实现规则:URL 字符串必须以 `https://` 开头,加单元测试式 grep 在 Module E |
| R4 | Vercel CDN 缓存 metadata,改动短时间内不生效 | 低(用户重抓即可) | 用 Twitter/FB 验证器的 "Re-fetch" 功能强制刷新 |
| R5 | 中文 OG 在某些平台对中文字符的截断逻辑奇怪(WhatsApp 历史上有问题) | 低 | 写 ZH 文案时控制在 120 字符内更保险 |
| R6 | 拆分后 page.tsx 的目录大小/import 路径影响 contentlayer 或 next-intl 插件解析 | 低 | `npm run build` 验证;若失败回滚到单文件 + 用别的方式注入 metadata(不推荐,因为 metadata 只能在 server) |

---

## Validation

成功标准(全部满足才算 Module E 通过):

1. ✅ `npm run build` 退出码 0,无 TS / lint 错误
2. ✅ 本地 dev `curl https://localhost:3000/en` 的 HTML 包含:
   - `<title>` 内含 "readiamond"(或更具体的 SEO 标题)
   - `<meta name="description">` 长度 > 50 且 < 200,内容与 readiamond 产品相关
   - `<meta property="og:title">`、`og:description`、`og:url`、`og:site_name`、`og:type`、`og:image`、`og:locale` 都存在
   - `<meta name="twitter:card">` = `summary_large_image`(或 `summary`)
   - `<meta name="twitter:title">`、`twitter:description`、`twitter:image` 都存在
3. ✅ ZH 版同上,文案为中文
4. ✅ 所有 `og:image` / `og:url` 都是绝对 URL(以 `https://` 开头)
5. ✅ 部署后 Twitter Card Validator 显示卡片;Facebook OG Debugger 无报错
6. ✅ 在 Slack / iMessage 真实粘贴 `https://readiamond.ryuteakwoo.com/en` 看到预期预览

---

## Open decisions

下面这些不影响 plan 落地,但**实施前需要拍板**(可在 Module B / D 启动前一次性解决,也可在执行中通过 `/plan-od` 走完):

### D1. OG 图选型(Module D 的选项 A/B/C)
- **A**:沿用 `public/readiamond-img/main-content.png`(立刻可用,但会被裁剪)
- **B**:新做一张 `public/og/og-readiamond.png`(1200×630,设计成品)
- **C**:用 Next 内置 `opengraph-image.tsx` 动态生成
- **推荐**:先 A,跑通整条链路;后续若效果差再升 B 或 C

### D2. SEO 标题模板
- 候选 1:`readiamond`(简洁,但搜索关键词覆盖弱)
- 候选 2:`readiamond — AI Reading Companion for Language Learners`(信息丰富,~50 字符)
- 候选 3:`readiamond | Language Learning App with FSRS Spaced Repetition`
- ZH 对应:`readiamond — AI 驱动的语言学习阅读器` / `readiamond | 基于 FSRS 算法的语言学习应用`
- **推荐**:候选 2 + ZH 第一种(对仗,品牌+定位)

### D3. SEO description 是否复用现有 messages key
- 复用 `readiamond.heroDescription`(已有内容,~120 字符)
- 还是另写更针对搜索结果的版本(更紧凑、含关键词)
- **推荐**:另写 `seoDescription`,允许独立于页面 hero 文案调优

### D4. `og:site_name`
- `"readiamond"`(产品名作为站点名)
- `"Ryuteakwoo's blog"`(整个 portfolio 一致性)
- **推荐**:`"readiamond"` —— 该子域名就是产品落地页,site name 与产品名一致最自然

### D5. Twitter `card` 类型
- `summary_large_image`(大卡,需 1.91:1 横图)
- `summary`(小卡,适合方图)
- **推荐**:`summary_large_image`,与 OG 图保持一致(无论 D1 选 A/B/C 都按 1.91:1 优化)

### D6. 是否在本批次顺手补 `og:locale:alternate`
- 加一条 `og:locale:alternate` 指向另一个 locale 的 URL,可被 FB 识别为多语言版本
- 与 Tier 1 #4 hreflang 是相邻的功能,但实现简单(单行 metadata)
- **推荐**:**不加**,留给 hreflang 那次一起做,以保持本批次 scope 干净

---

<!-- 本 plan 由 /plan-init 生成。决议确定后,运行 /plan-od 走 Open decisions,然后 /impl-next 启动 Module A。 -->
