# React Salt

轻量级后台产品组件解决框架

## 特性

* 提炼于Bootstrap3的设计风格，支持开发响应式布局和移动设备优先的WEB项目
* 基于npm + webpack + babel + nodejs的工作流
* 立志于让前端开发更快速、简单，所有开发者都能快速上手
* 高度可扩展性及搭建策略

## 安装

```
npm install react-salt
npm install rs-ui
```

## 示例

```
import { Grid } from 'react-salt';
ReactDOM.render(<Grid />, someNode);
```

### 引入样式

```
import 'react-salt/app/style/css/index.less';   // 可选项目，预置封装了一些基础界面级的样式
import 'rs-ui/index.less';  // 可选项目，包含React Salt系统所有功能组件的样式，是一个Bootstrap3的超集 
```

## 说明

基于单个组件的功能最大化策略，非常使用我们的单个React系列组件，或者进行任何自定义的扩展，我们提供了`rs-server`开发工具。更加推荐整套解决方案接入的方式，`React Salt`经过数十个后台系统的实际使用和打磨，并且在不断完善。
