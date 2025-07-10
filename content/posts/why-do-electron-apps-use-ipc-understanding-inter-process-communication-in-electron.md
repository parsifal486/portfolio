---
title: Why Do Electron Apps Use IPC? Understanding Inter-Process Communication in Electron
description: This article explains why Electron applications use IPC (Inter-Process Communication) due to the architecture of separate main and renderer processes. It details how Electron uses ipcMain, ipcRenderer, and contextBridge in the preload script to enable secure communication and system resource access from the renderer process. An example of file access IPC flow is included.
keywords: Electron, IPC, Inter-Process Communication, main process, renderer process, ipcMain, ipcRenderer, contextBridge, preload script, Electron architecture, desktop apps, nodejs, chromium
author: Lau Zeyu
date: 2025-07-10
language: en-US
---

### 引言：electron应用为什么要使用IPC？什么是IPC？

Electron 应用使用 IPC（进程间通信，Inter-Process Communication）的根本原因，来自于 使用 Web 技术（HTML/CSS/JS）开发跨平台桌面应用的理念。

通过将chromium与nodejs打包到一起，使得chromium对系统文件和信息等有了更全面的访问能力。

由于 **主进程（nodejs）和渲染进程（chromium）是两个不同的进程（不是线程）**，它们之间 **不能直接访问彼此的变量或函数**，因此：

- 当渲染进程需要调用系统资源（如文件系统、菜单、原生 API）时，必须通过主进程来实现。
- 当主进程需要将事件或数据传递给 UI，也必须通过通信机制通知渲染进程。

因此，Electron 提供了 **IPC 模块** 实现这两个进程之间的数据通信。

Electron 的 IPC 通信模块本质上是对象Object

| 模块（对象）名 | 所在进程 | 作用                                 |
| -------------- | -------- | ------------------------------------ |
| `ipcMain`      | 主进程   | 监听渲染进程发来的消息               |
| `ipcRenderer`  | 渲染进程 | 向主进程发送消息，或接收主进程的消息 |

通过这两个对象，应用的两个进程获得了通信的能力。那么在代码层面如何建立联系呢？

这就引出来了第三个重要模块Preload，和其中起主要作用的对象contextBridge

Main Process (main.js)
  ↓
BrowserWindow（创建渲染进程 + 绑定 preload 脚本）
  ↓
Preload 脚本（使用 contextBridge 暴露 API）
  ↓
Renderer Process（renderer.js 中调用 window.api）



以文件访问的功能为例

```js
// 主进程 main.js（或 main.ts）

import { ipcMain } from 'electron'
import fs from 'fs'

// 1. 业务层文件操作函数（不暴露）
function readFileContent(filePath) {
  return fs.readFileSync(filePath, 'utf-8')
}

// 2. 包装函数，起名字 A 供 ipcMain 注册
const IPC_CHANNEL_READ_FILE = 'read-file-content'

ipcMain.handle(IPC_CHANNEL_READ_FILE, (event, filePath) => {
  return readFileContent(filePath)
})

```

```js
// preload.js（预加载脚本）

import { contextBridge, ipcRenderer } from 'electron'

// 3. IPC 通道名字 A
const IPC_CHANNEL_READ_FILE = 'read-file-content'

// 4. contextBridge 的名字 B
const API_NAMESPACE = 'fileAPI'

// 5. 对 ipcRenderer.invoke 进行封装，起别名 C
contextBridge.exposeInMainWorld(API_NAMESPACE, {
  readFile: (filePath) => ipcRenderer.invoke(IPC_CHANNEL_READ_FILE, filePath)
})

```

```js
// 渲染进程 renderer.js

// 6. 以 B.C 的形式调用
window.fileAPI.readFile('/path/to/file.txt').then(content => {
  console.log('文件内容:', content)
})

```

以上假设有一个文件操作，然后把这个方法包装在另外一层方法中，起一个名字A暴露给Ipcmain，然后在preload中借助ipcRenderer，对先前在Ipcmain中注册的方法通过名字A进行调用，同时在借由contextBridge（每个contextBridge包含很多方法，contextBridge也有自己的名字B），对调用再起一个别名C供rederer以B.C的形式进行调用。