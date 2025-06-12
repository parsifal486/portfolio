---
title: 使用 CSS backdrop-filter 打造顶级毛玻璃效果
description: 本文详解如何通过 CSS 的 `backdrop-filter` 属性与优化技巧，创建更栩栩如生的毛玻璃（frosted glass）效果，并解决常见问题。
keywords: CSS, backdrop-filter, 毛玻璃效果, frosted glass, mask-image, 浏览器兼容, 优化技巧
author: Josh W. Comeau
date: 2025-06-11
language: zh
---

# 使用 CSS backdrop-filter 打造顶级毛玻璃效果

:contentReference[oaicite:1]{index=1} :contentReference[oaicite:2]{index=2}。

---

## 🎯 1. 为什么用 `backdrop-filter`

- :contentReference[oaicite:3]{index=3}
- 常用于更具层次感和真实感的界面效果 :contentReference[oaicite:4]{index=4}。

---

## ⚠️ 2. 默认模糊存在局限

- 默认只会模糊正好在元素后方的像素，附近内容不会参与。
- 结果会导致模糊视觉不连贯，不如真实玻璃效果 :contentReference[oaicite:5]{index=5}。

---

## 🛠️ 3. 扩展元素 + 遮罩做优化

- :contentReference[oaicite:6]{index=6}
- :contentReference[oaicite:7]{index=7}
- 这样可以让附近内容也被模糊，实现更柔和自然的效果 :contentReference[oaicite:8]{index=8}。

```css
.backdrop {
  position: absolute;
  inset: 0;
  height: 200%;
  backdrop-filter: blur(16px);
  mask-image: linear-gradient(to bottom, black 0% 50%, transparent 50% 100%);
  pointer-events: none;
}
```
