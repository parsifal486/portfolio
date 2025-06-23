---
title: 🧊 Liquid Glass 效果从原理到实现：手把手带你从入门到进阶
description: 本文详解如何通过 CSS 的 `backdrop-filter` 属性与优化技巧，创建更栩栩如生的毛玻璃（frosted glass）效果，并解决常见问题。
keywords: CSS, backdrop-filter, 毛玻璃效果, frosted glass, mask-image, 浏览器兼容, 优化技巧
author: Josh W. Comeau
date: 2025-06-11
language: zh
---

# 使用 CSS backdrop-filter 打造顶级毛玻璃效果

你有没有在 macOS、iOS 或某些炫酷网站上看到那种“毛玻璃 + 流动扭曲”的 UI 效果？像是冰冻的水面，又像玻璃下轻微涌动的液体。🤤这就是今天的主角：Liquid Glass（液态玻璃）效果。

今天我们不讲高大上的三维物理仿真，而是从一个普通网页开发者的视角出发，来揭开 Liquid Glass 的神秘面纱，顺带手撸一个属于自己的炫酷效果页！

🌈 先别急，Liquid Glass 究竟是啥？

Liquid Glass 其实是毛玻璃（glassmorphism）的一种进阶版。

它包含几个视觉特征：

半透明背景：有点像磨砂玻璃，能看到后面的东西，但是模糊的。

模糊（blur）：这是毛玻璃的经典标志。

液体波动感（液态扰动）：比普通毛玻璃多了一层“流动性”，看起来像在水中。

光泽高亮 & 色散：有时候你会看到像液体反光的白边，或者彩虹边（高级版本）。

🧠 这个效果是怎么做到的？（轻科普）
实现 liquid glass 效果的核心在于：

原理 技术方法
背景模糊 backdrop-filter: blur()（CSS）
液态扰动 SVG 滤镜里的 feTurbulence + feDisplacementMap
光感/色散 feSpecularLighting 或 WebGL Shader
半透明背景 rgba() 或 hsla() 设置带透明度的颜色

我们可以分成几个阶段来实现这个效果，简单点的就用 CSS，想更逼真，就加 SVG 滤镜，想最炫酷？那就 WebGL 上！

🍰 Part 1：最简单的 Liquid Glass，靠 CSS 就能搞定！
这是一个只用 CSS 的毛玻璃效果。虽然还不够“液态”，但它是最好的起点。

✅ HTML
html
Copy
Edit

<div class="glass-card">
  <h2>Hello Liquid Glass</h2>
</div>
✅ CSS
css
Copy
Edit
.glass-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 2rem;
  color: white;
  border: 1px solid rgba(255,255,255,0.2);
}
🎯 效果说明：

backdrop-filter: blur(10px) 模糊背景。

rgba(..., 0.15) 让背景半透明。

border 和 border-radius 给它点“玻璃边框”的质感。

这时候，你的页面上已经有了现代 UI 的感觉。是不是有点意思了？

🌊 Part 2：加上液态扰动，用 SVG Filter！
现在来点高级的。液态玻璃的“灵魂”，其实是 SVG 滤镜里的两个组件：

feTurbulence：生成噪声纹理，像水波。

feDisplacementMap：拿着刚才那波“噪声”，去扭曲我们的画面。

看起来很唬人？其实贴个 SVG 就能用了！

✅ HTML + SVG
html
Copy
Edit

<div class="glass" style="filter: url(#liquidGlass);">LIQUID</div>

<svg>
  <filter id="liquidGlass">
    <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="2" result="turb"/>
    <feDisplacementMap in2="turb" in="SourceGraphic" scale="15" />
  </filter>
</svg>
🤓 参数解释：
baseFrequency: 控制“波”的频率，越小越柔。

scale: 波动强度。

numOctaves: 噪声层数，越多越细腻。

🌟 现在是不是已经有点“哇哦”的感觉了？它动起来真的很像液体在玻璃里流动一样！

🔮 Part 3：动态波动 + 高光反射，迈向高级 Liquid Glass
要是你想实现像 macOS 那种会动、会亮、会反光的 Liquid Glass，推荐进入进阶区：

技术路线：
SVG 动态刷新 turbulence → 类似 Lucas Romero 的 Codepen：点我看

JS 动态调整 filter 参数 → 像 nodws 的 Codepen 有交互面板。

WebGL Shader 实现折射/反射 → 推荐用 Three.js + GL Shader 做真实玻璃模拟。

这些技术稍微有点门槛，但效果也确实——值回学习成本！

🔁 总结一下：不同版本的 Liquid Glass 适合谁？
难度 技术 效果 推荐场景
🍬 简单版 CSS + backdrop-filter 模糊透明 页面背景、模态框
🧊 进阶版 SVG 滤镜 波动 + 模糊 登录页、炫酷组件
🚀 高级版 WebGL / Three.js 折射 + 光感 + 动画 游戏 UI、炫技网页

🧪 你可以从这开始试试看：
我建议你 fork 这个 CodePen（Lucas 的 demo）然后慢慢改参数玩一玩，你会发现：

👉 “啊！原来这就是 Liquid Glass 的秘密！”

📦 贴士时间！
backdrop-filter 在 Safari 和老版 Edge 上可能不兼容，要注意 ✋

feDisplacementMap 在 Safari 会有 bug（透明背景下会出问题）🚨

多数现代浏览器已经支持 filter, mask, clip-path 等属性，可以自由发挥设计！
