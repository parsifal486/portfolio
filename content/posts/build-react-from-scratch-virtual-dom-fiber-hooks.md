---
title: ⚛️从零实现一个 React：手写虚拟 DOM、Fiber、Diff 与 Hooks
description: 深入理解 React 核心原理，通过手写代码逐步实现虚拟 DOM、Fiber 架构、Diff 算法、并发渲染和 Hooks，构建一个完整的迷你 React 框架 Fuact。
keywords: React, 虚拟DOM, Fiber, Diff算法, Hooks, JSX, 并发渲染, 前端框架, JavaScript
author: Lau Zeyu
date: 2025-09-11
language: zh
---

# 从零实现一个 React：手写虚拟 DOM、Fiber、Diff 与 Hooks

## Chapter 1 虚拟DOM

我将在以下代码中从原始的react代码为出发点，从0开始，逐步手动构建一个react，包含基本的JSX支持和虚拟DOM

首先让我们写一段index.html作为起始

```html
<!DOCTYPE html>
<!--index.html-->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!--引入react和react-dom-->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <!-- 添加Babel转换器 -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>

<body>
  <div id="root"></div>
  <!-- 在body底部加载JS，确保DOM已加载 -->
  <script type="text/babel" src="index1.js"></script>
</body>
</html>
```

在这段代码中使用cdn引入了babel和react以及reactDom，使得以下包含React的js代码可以正常运行

```jsx
//index.js
const element = <h1>hello,world!!</h1>;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(element) 
```

让我们来拆解以上react代码，其中包含的react特性有:

1. **创建虚拟DOM对象** element 的数据类型为 h1 Object, 使用`console.log(element)`打印可以获得

   ```json
   {
     type: "h1",
     key: null,
     ref: null,
     props: { children: "hello,world!!" }
   }
   ```

   `const element = <h1>hello,world!!</h1>;`本身并不能被浏览器识别和运行，因为我们使用了babel转换器，这段代码在交给浏览器运行前会被转换为`const element = React.createElement("h1", null, "hello, world!!");`

   此处`React.createElement` 是 React 提供的一个工厂函数，它用于 创建 React 元素对象（虚拟 DOM）

   > DOM和虚拟DOM：
   >
   > DOM指html文件经过浏览器解析之后生成的树文件（包括其子树）
   >
   > 而虚拟DOM指是一个 普通 JS 对象，拥有足够的信息可以描述将要渲染的 UI（即真正的DOM）

2. **创建一个react渲染根，作为react管理UI的入口点** 

​	react渲染根是react18引入的新特性`ReactDOM.createRoot(container);`

3. **把 React 元素对象（虚拟 DOM）挂载到 `container`**

   react会把 `element` 转换成真实 DOM 节点插入到 `container` 里，以后当 `element` 更新时，React 会自动 diff 新旧虚拟 ，DOM只更新变化的部分，而不是整棵树

接下来让我们用纯js代码来替换这三个特性

1. **创建虚拟DOM对象**

   鉴于对element对象的打印结果，我们可以将element替换为我们手写的对象

   ```js
   const element = {
     type: "h1",
     props: {
       title: "foo",
       children: "Hello",
     },
   }
   const node = document.createElement(element.type)
   node["title"] = element.props.title
   ```

2. **创建一个react渲染根**

   `createRoot` 是 React 内部优化、状态管理、调度的对象，在这里让我们先简单的实现渲染，创建渲染根需要更复杂的数据结构，让我们留到后面

3. **把 React 元素对象（虚拟 DOM）挂载到 `container`**

   ```js
   const node = document.createElement(element2.type);
   
   
   node.textContent = element2.props.children;
   container.appendChild(node);
   ```

现在我们有了最基本的react实现index1如下，即使移除cdn对react的引入，依然可以实现相同的效果
```js
//index1.js
const element = {
  type: "h1",
  props: { children: "hello,world!!" },
};

const container = document.getElementById("root");

const node = document.createElement(element.type);


node.textContent = element.props.children;
container.appendChild(node);
```

## Chapter 2 封装

在以上代码中，我们已经实现了基本的虚拟DOM逻辑，接下来我们来定义自己的函数对以上逻辑进行封装

在代码`const element = <h1>hello,world!!</h1>;`中，在传给浏览器处理之前babel这段代码处理为`const element = React.createElement("h1", null, "Hello, world!");` 再通过React.createElement的构造，最终生成react虚拟DOM对象

在chapetr1 中我们把以上的两步通过直接手写一个JSON对象来进行暂时的改造，要想在我们的React中使用JSX，我们需要创建我们自己的createElement函数

根据之前提到的数据结构，我们的createELement在创建element时候返回的虚拟DOM对象需要有两个参数`type`, `props`, 所以我们的createElemnet递归函数基本样式应该如下

```  js
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  }
}

// 叶子节点作为text处理
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

```

好的，现在我们已经成功定义了属于我们自己的createElement函数，但是要让babel在转译代码时，生成我们的代码`const = element = createElement("h1", null, "Hello, world!")`而不是`const element = React.createElement("h1", null, "Hello, world!");` 我们需要为createElement添加一个JSX指令注释 `/** @jsx createElement \*/`. [可参考babel文档](https://babeljs.io/docs/babel-plugin-transform-react-jsx)

让我们为我们的仓库起一个名字，叫Fuact吧

最终我们的虚拟DOM构造逻辑如下

```js
//index2.js
/** @jsx Fuact.createElement */
//DOM构造逻辑
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  }
}

// 叶子节点作为text处理
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

const Fuact = {
	createElement
}

```

接下来，我们对挂载和渲染逻辑，即`root.render(element) `进行封装

在render中，我们需要对于element创建实际的dom并且绑定到container上，因为element和dom都是树形的结构，所以我们需要递归的实现

```js
//render 逻辑
function render(element, container) {
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  // 获取所有属性名
  const propNames = Object.keys(element.props);

  //把所有非children的属性绑定到dom上
  for (let name of propNames) {
    if (name !== "children") {
      dom[name] = element.props[name];
    }
  }

  //递归渲染子节点
  element.props.children.forEach((child) => {
    render(child, dom);
  });

  container.appendChild(dom);
}
```

将render和之前的createElement合并到一起就得到了新的可执行代码，添加测试示例代码就可以看到效果了

```js
//index2.js
/** @jsx Fuact.createElement */
//DOM构造逻辑
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

// 叶子节点作为text处理
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

//render 逻辑
function render(element, container) {
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  // 获取所有属性名
  const propNames = Object.keys(element.props);

  //把所有非children的属性绑定到dom上
  for (let name of propNames) {
    if (name !== "children") {
      dom[name] = element.props[name];
    }
  }

  //递归渲染子节点
  element.props.children.forEach((child) => {
    render(child, dom);
  });

  container.appendChild(dom);
}

const Fuact = {
  createElement,
  render,
};


//示例测试代码

const sayHello = <div><h1>Hello,world</h1><h2>I am Fuact</h2></div>

Fuact.render(sayHello, document.getElementById("root"));
```

## Chapter 3 并发渲染

在传统的 React 渲染中（同步渲染），当组件更新时，React 会一次性渲染整棵组件树。在渲染期间，浏览器存在被“阻塞”的可能，用户这时候无法与页面进行交互，界面可能会卡顿，尤其是有大量组件或复杂计算时。

react通过引入并发渲染来对渲染进程进行优先级划分，使得渲染可以被暂停和恢复，从而保持页面的流畅。

首先，我们要用到方法`requestIdleCallback(taskCallback, { timeout: number })`

> `requestIdleCallback(taskCallback, { timeout: number })`是浏览器提供的一个 API，用来在主线程空闲时执行任务，目的是避免阻塞用户界面（UI），保持页面响应流畅。 taskCallBack()函数是要放进待执行任务队列的逻辑()，{timeout: number}中的timeout则指明即使主线程没有空闲也会在timeout的时间之后放进任务执行队列,如果不设置 `timeout`，默认是无限等待，即只在浏览器空闲时执行任务，没有超时触发。

`deadline`对象

> `deadline` 是浏览器提供的空闲时间信息的对象，主要方法
>
> 1. `deadline.timeRemaining()` 返回当前空闲时间（毫秒），表示你还能在空闲时间里做多少工作。通常返回大于 0 的数。
> 2. `deadline.didTimeout` 如果任务是因为超时而触发的，这里为 `true`；否则为 `false`。
>
> 对于requestIdleCallback的taskCallback是可选参数，但在处理大量任务或动画更新时非常有用。

我们需要定义一个workFlow函数作为taskCallback传递给requestIdleCallback，用于递归渲染dom节点，在workFlow函数内部，让我们定义一个shouldYield变量来判断当前逻辑中是否应该终止渲染

```js
//并行更新
let nextUnitOfWork = null;

function workFlow(){
  const shouldYield = false;
  while(nextFiberOfWork && !shouldYield){
    nextFiberOfWork = performFiberOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1; //shouldYield作为时间管理的“安全阀”，如果浏览器只剩下一点点时间 (<1ms)，我就先不抢时间了，交还给浏览器。
  }
  requestIdleCallback(workFlow);
}

function performFiberOfWork(){
	//performFiberOfWork 就是与requestIdleCallback配合，“处理当前页面节点的工作，并决定下一个节点去处理谁”的小单位工作函数，它让页面可以 分批、按顺序更新，而不会卡死浏览器。我们会在后续代码中实现
}

requestIdleCallback(workFlow);//告诉浏览器，我们使用workFlow定义了一些任务，让他有空就做
```

## Chapter 4 Fibers Tree 构建

Fiber Tree 是 React 用来描述页面结构的内部数据结构，本质上是一棵树，每个节点对应一个 React 元素（DOM 元素或组件）。Fiber Tree 把整个页面拆成小块（Fiber），可以分批处理更新，不会一次性阻塞浏览器。

- **主要特点**：

  1. 每个节点都是一个Fiber 单元。

  2. 每个 Fiber 包含它的类型、属性、**子节点、兄弟节点和父节点**引用。

  3. 支持增量渲染（可以暂停/恢复），方便实现并发更新。

  4. fiber树的遍历，渲染顺序是DFS，深度优先

     > 1. **先访问自己**（执行逻辑，比如创建 DOM）
     > 2. **如果有子节点 → 进入子节点**
     > 3. **如果没有子节点 → 看兄弟节点**
     > 4. **如果没有兄弟 → 回到父节点，再找父节点的兄弟**
     > 5. 重复直到回到根节点

  5. 我们的Fiber节点looks like：(通过数据类型可以看出fiber tree既保存了之前提到的虚拟dom所需要的信息，又保存了当前fiber在整个树之中渲染进程的信息)

     ```js
     {
       type: "div",          // 节点类型，可能是 "div"、"h1"、TEXT_ELEMENT 等
       props: {              // 节点的属性和子节点
         id: "greet",
         children: [...]
       },
       dom: HTMLElement 或 null, // 对应的真实 DOM 节点（第一次是 null）
                    
       parent: fiber,        // 指向父 fiber
       child: fiber,         // 第一个子 fiber
       sibling: fiber        // 下一个兄弟 fiber
     }
     ```

我们把当前render中的渲染dom元素的逻辑移入一个新的createDom函数来抽离Dom的node创建逻辑，render用来实现启动Fiber的渲染和nextFiberOfWork初始化的任务。

```js
//根据虚拟dom内容创建真实的dom对象
function createDom(fiber) {
  const dom = fiber.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(fiber.type);
  const isProperty = key => key !== "children";
  Object.keys(fiber.props).filter(isProperty).forEach(name => {
    dom[name] = fiber.props[name];
  });
  return dom;
}

//初始化一个fiber对象，启动本次渲染 element 是虚拟Dom根节点，container 是根节点对应的dom节点
function render(element, container) {
  nextFiberOfWork = {
    dom: container,
    props: {
      children: [element],
    },
  };
}
```

在实际的使用中，我们需要先`Fuact.render(vitualDom, document);` 调用render来建立根Fiber，然后通过 `requestIdleCallback(workFlow);` 来通知浏览器，有时间的话做一下我们workFlow中的逻辑：

workFlow中的核心逻辑是while包裹的performFiberOfWork()逻辑，在performFiberOfWork中，我们做以下任务：

```js
//performFiberOfWork处理当前 fiber 节点：创建对应的 DOM、挂载到父节点、为子节点创建 fiber，并返回下一个要处理的 fiber。
function performFiberOfWork(fiber){
  // 先根据虚拟dom创建实际dom
  if(!fiber.dom){
    fiber.dom = createDom(fiber);
  }
  
  // 将当前fiber节点的真实dom挂载到父亲dom上
  if(fiber.parent){
    fiber.parent.dom.appendChild(fiber.dom);
  }

  // 然后创建子fiber的虚拟dom部分 ，可以先把所有工作单元（fiber）都准备好，后续再逐步处理和渲染，支持可中断和高效调度。
  const elements = fiber.props.children; //element：子节点数组
  const index = 0; // 索引
  let prevSibling = null; // 上一个兄弟fiber
  while(index < elements.length){ //递增遍历所有子fiber，构建子fiber的虚拟dom部分
    const element = elements[index];
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    };
    if(index === 0){
      fiber.child = newFiber;
    }else{
      prevSibling.sibling = newFiber;
    }
    prevSibling = newFiber;
    index++;
  }

  // 返回下一个fiber： fiber树构建的顺序是 子节点->下一个兄弟节点->父亲节点
  if(fiber.child){
    return fiber.child;
  }
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent;
  }
}
```

## Chapter 5 渲染控制

每次我们处理完一个元素虚拟dom节点时，都会向DOM中添加一个新的节点。浏览器可能在我们完成整个树的渲染之前在任意两个节点的渲染工作之间中断我们的工作。在这种情况下，用户将看到一个不完整的UI。而我们是不希望这样发生的。

所以我们把`performFiberOfWork()`中的负责把当前节点的dom添加到父dom的以下部分代码

```js
// 将当前fiber节点的真实dom挂载到父亲dom上
  if(fiber.parent){
    fiber.parent.dom.appendChild(fiber.dom);
  }
```

拿走，封装到新的函数中

```js
//提交渲染：提交阶段的入口，负责启动递归提交和更新全局状态。
function commitRoot(){
  commitWork(wipRoot.child); // 调用commitWork，把虚拟dom递归构造到wipRoot的dom（即真实dom）上。
  currentRoot = wipRoot; //当真实dom挂载结束后，把包含刚渲染结束的真实dom存入currentRoot中，用于记录和更新页面
  wipRoot = null;
}

//递归提交渲染：递归地把 fiber 树上的所有 DOM 节点插入到页面上，实现批量、原子的 UI 更新。
function commitWork(fiber) {
  if (!fiber) {
    return
  }
  const domParent = fiber.parent.dom
  domParent.appendChild(fiber.dom)
  commitWork(fiber.child)
  commitWork(fiber.sibling)
}

let nextFiberOfWork = null; //下一个要处理的 fiber 节点
let currentRoot = null; //当前渲染的 fiber 树的根节点
let wipRoot = null; //正在构建中的 fiber 树的根节点 wipRootwork-in-progress root）
```

同时更新render的初始化逻辑, wipRoot作为正在构建中的 fiber 树的根节点，我们把真实DOM（container）写入wipRoot

```js
//初始化一个fiber对象，启动本次渲染 element 是虚拟Dom根节点，container 是根节点对应的dom节点
function render(element, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    alternate: currentRoot, //当前正在构建的 fiber（work-in-progress fiber）和上一次渲染的 fiber（current fiber）通过 alternate 互相引用。
  };
  nextFiberOfWork = wipRoot;
}
```

## 中期小结

```js
//index2.js
/** @jsx Fuact.createElement */
//DOM构造逻辑
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

// 叶子节点作为text处理
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

//创建dom
function createDom(fiber) {
  const dom = fiber.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(fiber.type);
  const isProperty = key => key !== "children";
  Object.keys(fiber.props).filter(isProperty).forEach(name => {
    dom[name] = fiber.props[name];
  });
  return dom;
}


//初始化一个fiber对象，启动本次渲染 element 是虚拟Dom根节点，container 是根节点对应的dom节点
function render(element, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    alternate: currentRoot, //当前正在构建的 fiber（work-in-progress fiber）和上一次渲染的 fiber（current fiber）通过 alternate 互相引用。
  };
  nextFiberOfWork = wipRoot;
}


let nextFiberOfWork = null; //下一个要处理的 fiber 节点
let currentRoot = null; //当前渲染的 fiber 树的根节点
let wipRoot = null; //正在构建中的 fiber 树的根节点 wipRootwork-in-progress root）

//提交渲染：提交阶段的入口，负责启动递归提交和更新全局状态。
function commitRoot(){
  commitWork(wipRoot.child); //
  currentRoot = wipRoot;
  wipRoot = null;
}

//递归提交渲染：递归地把 fiber 树上的所有 DOM 节点插入到页面上，实现批量、原子的 UI 更新。
function commitWork(fiber) {
  if (!fiber) {
    return
  }
  const domParent = fiber.parent.dom
  domParent.appendChild(fiber.dom)
  commitWork(fiber.child)
  commitWork(fiber.sibling)
}

function workFlow(deadline){
  let shouldYield = false;
  while(nextFiberOfWork && !shouldYield){
    nextFiberOfWork = performFiberOfWork(nextFiberOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }

  if(!nextFiberOfWork && wipRoot){
    commitRoot();
  }

  requestIdleCallback(workFlow);
}


function performFiberOfWork(fiber){
  // 先创建dom
  if(!fiber.dom){
    fiber.dom = createDom(fiber);
  }

  // 然后创建子fiber
  const elements = fiber.props.children;
  let index = 0; // 索引
  let prevSibling = null; // 上一个兄弟fiber
  while(index < elements.length){
    const element = elements[index];
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    };
    if(index === 0){
      fiber.child = newFiber;
    }else{
      prevSibling.sibling = newFiber;
    }
    prevSibling = newFiber;
    index++;
  }

  // 返回下一个fiber
  if(fiber.child){
    return fiber.child;
  }
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent;
  }
}

const Fuact = {
  createElement,
  render,
};

//示例代码

const sayHello = <div><h1 id="greet">Hello,world</h1><h2>I am Fuact</h2></div>
const sayGoodbye = <div><h1 id="greet">goodbye,world</h1><h2>I am Fuact</h2></div>
Fuact.render(sayHello, document.getElementById("root"));
requestIdleCallback(workFlow);

//延时更新
setTimeout(() => {
  const container = document.getElementById("root");
  container.innerHTML = "";
  Fuact.render(sayGoodbye, container);
}, 1000);
```

至此，我们已经实现了对react核心设计思想的大半实现

React依赖于核心数据结构FiberTree，每个fiberTree的节点都包含虚拟dom的信息，并且可能拥有对应的真实dom的信息。其中，fiberTree的虚拟dom部分信息的构建在**Reconciliation**（意为调解，一致）阶段通过浏览器方法`requestIdleCallback`来动态使用浏览器提供的空闲时间片来计算（新版本的react已经改为使用时间切片的调度器 Scheduler ，但是原理相同）。虚拟dom以wipRoot为树根计算，当虚拟dom计算完毕时，用于记录未计算的fiber节点的nextFiberOfWork为空，此时函数commitRoot()被调用，递归把子节点的dom挂载到其父亲节点上。挂载结束后将计算结束后存在wipRoot內的信息存入currentRoot，然后清空wipRoot为下次计算做好准备

## Chapter 6 Diff局部更新

Diff算法的核心任务就是计算 **新旧虚拟 DOM 树之间的差异**，决定哪些地方需要真正更新到浏览器的 DOM。而这个对比逻辑会变得复杂，需要单独设计和维护。在之前的小结中，我们提到使用fiberTree的虚拟dom部分信息的构建过程阶段为Reconciliation，这个调解，指的就是新旧虚拟dom的差异计算。所以我们的dom差异计算逻辑应该在performFiberOfWork中创建子fiber的逻辑前进行，根据变化为节点添加effectTag属性，effectTag中保存这个节点的状态（ "PLACEMENT"：需要插入新节点  "UPDATE"：需要更新已有节点的属性 "DELETION"：需要删除节点）。然后在commit 阶段执行相应操作。

 ```js
 
 function performFiberOfWork(fiber){
   // 先创建当前fiber节点的dom
   if(!fiber.dom){
     fiber.dom = createDom(fiber);
   }
 
   // 然后创建子fiber
   const elements = fiber.props.children;
   reconcileChildren(fiber, elements);
 
   // 返回下一个fiber
   if(fiber.child){
     return fiber.child;
   }
   let nextFiber = fiber;
   while (nextFiber) {
     if (nextFiber.sibling) {
       return nextFiber.sibling
     }
     nextFiber = nextFiber.parent;
   }
 }
 
 function reconcileChildren(wipFiber, elements) {
   let index = 0; // 索引
   let oldFiber = wipFiber.alternate && wipFiber.alternate.child;//用作比较的旧fiber
   let prevSibling = null; // 上一个兄弟fiber
   while(index < elements.length || oldFiber!==null){
     const element = elements[index];
     let newFiber = null;
      
     const sameType =
       oldFiber &&
       element &&
       element.type == oldFiber.type
 
     // 如果类型相同，则更新fiber
     if (sameType) {
       newFiber = {
         type: oldFiber.type,
         props: element.props,
         dom: oldFiber.dom,
         parent: wipFiber,
         alternate: oldFiber,
         effectTag: "UPDATE",
       }
     }
 
     // 如果类型不同，则创建新的fiber
     if (element && !sameType) {
       newFiber = {
         type: element.type,
         props: element.props,
         dom: null,
         parent: wipFiber,
         alternate: null,
         effectTag: "PLACEMENT",
       }
     }
 
     // 如果类型不同，则删除旧的fiber
     if (oldFiber && !sameType) {
       oldFiber.effectTag = "DELETION"
       deletions.push(oldFiber) // 将需要删除的 fiber 节点添加到 deletions 数组中
     }
 
     if(oldFiber){
       oldFiber = oldFiber.sibling; // 旧节点比较结束，将旧的fiber节点赋值给下一个兄弟fiber节点继续比较
     }
 
     if (index === 0) {
       wipFiber.child = newFiber //如果是第一个fiber节点，则将新的fiber节点赋值给父fiber节点的child
     } else if (element) {
       prevSibling.sibling = newFiber //如果是其他fiber节点，则将新的fiber节点赋值给上一个兄弟fiber节点的sibling
     }
 
     prevSibling = newFiber
     index++;
   }
 }
 
 ```

对应在commit中添加effectTag对应的逻辑

```JS
//递归提交渲染：递归地把 fiber 树上的所有 DOM 节点插入到页面上，实现批量、原子的 UI 更新。
function commitWork(fiber) {
  if (!fiber) {
    return
  }
  const domParent = fiber.parent.dom

  if (
    fiber.effectTag === "PLACEMENT" &&
    fiber.dom != null
  ) {
    domParent.appendChild(fiber.dom)
  } else if (
    fiber.effectTag === "UPDATE" &&
    fiber.dom != null
  ) {
    updateDom(
      fiber.dom,
      fiber.alternate.props,
      fiber.props
    )
  } else if (fiber.effectTag === "DELETION") {
    domParent.removeChild(fiber.dom)
  }

  commitWork(fiber.child)
  commitWork(fiber.sibling)
}



//更新dom方法
const isEvent = key => key.startsWith("on")
const isProperty = key =>
  key !== "children" && !isEvent(key)
const isNew = (prev, next) => key =>
  prev[key] !== next[key]
const isGone = (prev, next) => key => !(key in next)
function updateDom(dom, prevProps, nextProps) {
  Object.keys(prevProps)
    .filter(isEvent)
    .filter(
      key =>
        !(key in nextProps) ||
        isNew(prevProps, nextProps)(key)
    )
    .forEach(name => {
      const eventType = name
        .toLowerCase()
        .substring(2)
      dom.removeEventListener(
        eventType,
        prevProps[name]
      )
    })
  // 删除旧的属性
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach(name => {
      dom[name] = ""
    })

  // 设置新的或改变的属性
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      dom[name] = nextProps[name]
    })
  // 添加事件监听
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      const eventType = name
        .toLowerCase()
        .substring(2)
      dom.addEventListener(
        eventType,
        nextProps[name]
      )
    })
}

//更新createDom
function createDom(fiber) {
  const dom = fiber.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(fiber.type);
  
  updateDom(dom, {}, fiber.props)
  return dom;
}
```

## Chapter 7 函数组件

performFiberOfWork中，我们目前仅支持dom元素，接下来让我们添加逻辑，支持在构建dom树的过程中添加函数组件

``` js
function performFiberOfWork(fiber) {
	
  //添加判断Fiber类型是否为function的逻辑，并分别用不同的方式更新
  isFunctionComponent = fiber.type instanceof Function;
  if(isFunctionComponent){
    updateFunctionComponent(fiber);
  }else{
    updateHostComponent(fiber);
  }

  // 返回下一个fiber
  if (fiber.child) {
    return fiber.child;
  }
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent;
  }
}

function updateFunctionComponent(fiber){
  const children = [fiber.type(fiber.props)];
  reconcileChildren(fiber, children);
}

function updateHostComponent(fiber){
  if(!fiber.dom){
    fiber.dom = createDom(fiber);
  }
  reconcileChildren(fiber, fiber.props.children);
}
```

在commitWork中对函数Fiber进行处理

```js
//递归提交渲染：递归地把 fiber 树上的所有 DOM 节点插入到页面上，实现批量、原子的 UI 更新。
function commitWork(fiber) {
  if (!fiber) {
    return;
  }

  let domParentFiber = fiber.parent;
  while(!domParentFiber.dom){
    domParentFiber = domParentFiber.parent;
  }
  const domParent = domParentFiber.dom;

  if (fiber.effectTag === "PLACEMENT" && fiber.dom != null) {
    domParent.appendChild(fiber.dom);
  } else if (fiber.effectTag === "UPDATE" && fiber.dom != null) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props);
  } else if (fiber.effectTag === "DELETION") {
    commitDeletion(fiber, domParent)
  }

  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

//函数组件的 fiber.dom 为 null；直接domParent.removeChild(fiber.dom)：删除会报错或什么都不删，所以需要使用commitDeletion来越过空dom的 function fiber
function commitDeletion(fiber, domParent) {
  if (fiber.dom) {
    domParent.removeChild(fiber.dom)
  } else {
    commitDeletion(fiber.child, domParent)
  }
}
```

好了现在我们的fuact支持使用函数组件进行调用了

```js
/** @jsx Fuact.createElement */
function App(props) {
  return <h1>Hi {props.name}</h1>
}
const element = <App name="foo" />
const container = document.getElementById("root")
Fuact.render(element, container)
```

## Chapter 8 Hooks

要继续写 Hook 部分，我们可以从最核心的 `useState` 实现开始。思路是：

- Hooks 依赖于函数组件。
- 每次执行函数组件的时候，都会依次执行里面的 Hook。
- 所以我们需要在 Fiber 上保存当前组件的状态信息。

```
//首先添加useState的定义
const Fuact = {
  createElement,
  render,
  useState,
};
```

在函数组件中初始化 Hook

```js
function updateFunctionComponent(fiber) {
  wipFiber = fiber;
  hookIndex = 0;
  wipFiber.hooks = []; // 存储本组件的所有 hook

  const children = [fiber.type(fiber.props)];
  reconcileChildren(fiber, children);
}

```

useState 的实现

```js
function useState(initial) {
  // 获取旧的 hook
  const oldHook =
    wipFiber.alternate &&
    wipFiber.alternate.hooks &&
    wipFiber.alternate.hooks[hookIndex]

  // 创建新的 hook
  const hook = {
    state: oldHook ? oldHook.state : initial,
    queue: [], // 存储状态更新的队列
  };

  // 执行旧的更新队列里的 action
  const actions = oldHook ? oldHook.queue : [];
  actions.forEach(action => {
    hook.state = action(hook.state);
  });

  // setState：入队 action，并触发重新渲染
  const setState = action => {
    hook.queue.push(
      typeof action === "function" ? action : () => action
    );

    // 重新初始化 wipRoot，准备下一轮渲染
    wipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.props,
      alternate: currentRoot,
    };
    nextFiberOfWork = wipRoot;
    deletions = [];
  };

  // 保存 hook，并更新索引
  wipFiber.hooks.push(hook);
  hookIndex++;

  return [hook.state, setState];
}

```

示例运行

```js
/** @jsx Fuact.createElement */
function Counter() {
  const [count, setCount] = Fuact.useState(0);
  return (
    <h1 onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </h1>
  );
}

const container = document.getElementById("root");
Fuact.render(<Counter />, container);

```

至此，我们的Fuact就写完了

## 参考

https://blog.r0b.io/post/using-jsx-without-react/

https://babeljs.io/docs/babel-plugin-transform-react-jsx
