---
title: 🧊 Liquid Glass 效果从原理到实现：手把手带你从入门到进阶
description: 本文详解如何通过 CSS 的 `backdrop-filter` 属性与优化技巧，创建更栩栩如生的毛玻璃（frosted glass）效果，并解决常见问题。
keywords: CSS, backdrop-filter, 毛玻璃效果, frosted glass, mask-image, 浏览器兼容, 优化技巧
author: Josh W. Comeau
date: 2025-06-11
language: zh
---

# 🧊 Liquid Glass 效果从原理到实现：手把手带你从入门到进阶

具体实现可以参考我的[codepen](https://codepen.io/zeyu-liu-the-lessful/pen/ogXVVWb)

首先我们认识到，静态的liquid glass 的效果是由带弧度的玻璃边缘和水平的中心区域构成。通过使用box-shadow

```css
.glass1 {
    /*other code*/
    box-shadow:
        0 0 10px 2px rgba(0, 0, 0, 0.5),
        inset 0 0 10px 2px rgba(255, 255, 255, 0.9);
}
```

我们可以为玻璃添加一个基本的边缘效果
向外添加一个基本的物理实体都会具有的深色阴影，向内添加一个白色的阴影来初步模拟弧形的玻璃边缘的折射效果。

```
border: 1px solid rgba(255, 255, 255, 0.2);
```

通过一个几乎透明的白色细边来模拟玻璃边缘

这样我们就初步得到了一个基础的玻璃样式。

为了进一步优化玻璃的质感，我们可以对这个玻璃加一些效果：

磨砂质感：

```css
backdrop-filter: blur(2px); /*此处使用1px 2px等较低的模糊值即可*/
```

透明质感：

```css
backdrop-filter: saturate(170%);
```

通过为背景增加饱和度，来模拟非常透明的玻璃附带有的一种放大的感觉。

好了，到此为止，我们已经获得了一块质感非常好的玻璃，但是距离liquidglass，我们还欠缺一个liquid属性。

liquid水波纹在css中一般使用 [svg filter <feTurbulence>](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feTurbulence)和[<feDisplacementMap>](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feDisplacementMap)来实现水波纹效果：

```html
<svg style="display: none">
    <filter id="glass" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.008"
            numOctaves="2"
            seed="92"
            result="noise"
        />
        <feGaussianBlur in="noise" stdDeviation="0.02" result="blur" />
        <feDisplacementMap
            in="SourceGraphic"
            in2="blur"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="B"
        />
    </filter>
</svg>
```

在页面中引入svg filer如上，`<feTurbulence>`通过 `type` 控制风格，`baseFrequency` 控制密度，`numOctaves` 增加细节，`seed` 改变图案，易搭配其他滤镜使用。

`<feDisplacementMap>` 用另一图像的颜色通道控制原图像素的偏移，实现波纹、扭曲、液体等效果。通过 `scale` 控制扭曲强度，`xChannelSelector` 和 `yChannelSelector` 控制扭曲方向来源通道。

这个滤镜通过 `<feTurbulence>` 生成噪声，再模糊处理，最后用 `<feDisplacementMap>` 将原图按照噪声进行位移，产生扭曲的玻璃效果。调节 `baseFrequency` 控制纹理密度，`scale` 控制扭曲强度。

定义好我们的filter之后，再使用CSS伪元素应用这个filter来实现水波纹的扭曲效果

```css
.glass2::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow:
        0 0 10px 2px rgba(0, 0, 0, 0.5),
        inset 0 0 10px 2px rgba(255, 255, 255, 0.9);
}

.glass2::after {
    content: '';
    position: absolute;
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
    inset: 0;
    border-radius: 20px;
    filter: url(#glass);
    -webkit-filter: url(#glass);
    z-index: -1;
}
```

在这里使用了两个css伪元素，主要是因为`<feDisplacementMap>` 所使用的 input SourceGraphic 只接受包含了应用滤镜的元素本身的渲染结果（包括border和内部的box-shadow），不包括外部的box-shadow以及所有的css伪类元素。 所以我们把所有的除了背景之外的多余效果（border，box-shadow等）挪到::before的伪类中，再在::after 的伪类中应用filter。

`<feDisplacementMap>`的输入必须保证输入background图像的纯净，如果掺入了白色的边框或者shadow，效果就回变得很丑很丑。
