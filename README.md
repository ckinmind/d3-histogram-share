# d3-histogram-share
![d3-histogram-share](https://raw.githubusercontent.com/ckinmind/d3-histogram-share/master/demo.gif)
一个关于d3中混合直方散点图的分享, 在线访问 [https://ckinmind.github.io/d3-histogram-share](https://ckinmind.github.io/d3-histogram-share/#/)


## 技术栈
- d3.js(图表)
- reveal.js(ppt)

## 项目说明
- 本项目是关于d3图表的分享, 以ppt的形式讲解一个用d3制作的混合图
- 项目中的在线ppt使用的是 `reveal.js`
- 本次分享的图表适合展示原本散点类型的数据，并且能在时间维度上进行切分这样的数据形式

## 版本更新
- **[v1.0]**: 初始版本，暂无迭代


## 如何开始
```js
> git clone https://github.com/ckinmind/d3-histogram-share.git
> cd d3-histogram-share
> (直接打开index.html)
```

## 操作说明
- 方向键切换ppt
- ESC键查看全局概览视图

## 资源地址

- 原图地址：[Date slider - histogram legend](https://bl.ocks.org/officeofjane/f132634f67b114815ba686484f9f7a77/c838775c9d23ff565a3f3a90869ae8aca63f2d84)
- 本次分享的改写型：[histogram——以日期为时间维度](https://bl.ocks.org/ckinmind/9b2fdee3c77d032d18f02eb8b4ea100a)
- 改进型1：[histogram——用刷子brush实现拖拽和范围选择](https://bl.ocks.org/ckinmind/c0da1e7f2ab093cc25d09d57efa3b750)
- 改进型2：[histogram——力图实现散点不重叠(固定圆半径)](https://bl.ocks.org/ckinmind/3d5d17b992e3f4c7f3ae1b134bf1902f)
- 改进型3：[histogram——力图实现散点不重叠(不固定圆半径)](https://bl.ocks.org/ckinmind/f87a5aab529f65afc32b2e7dbe6ddac4)

## 知识点
- d3.forceSimulation 创建一个力模拟
- d3.forceX 创建x-定位力
- d3.forceY 创建y-定位力
- d3.forceCollide 创建一个圆碰撞力
- d3.forceManyBody 创建多体力
