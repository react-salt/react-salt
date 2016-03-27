# 快速上手

## 标准开发

实际项目开发中，需要对ES2015、JSX、LESS代码的构建、打包不熟等有一系列工程化需求。我们提供了`rs-server`开发工具来辅助`React组件`开发.

### 1、安装开发工具

```
npm install rs-server --save-dev
npm run dev

// 需要实现添加以下scripts到package.json
"dev" : "node node_modules/.bin/rs-server"
```

### 2、安装组件库

```
npm install react-salt --save
```

### 3、使用组件

更多样例可以参考具体组件的demo

```
import React from 'react';
import { Grid } from 'react-salt';

function App(props) {
    return <Grid data={props.data}/>;
}

export default App;
```

### 4、开发调试

访问`http://127.0.0.1:7777`查看效果

## 兼容性

只针对现代浏览器，前期开发基于Bootstrap3的css以及react，对兼容性投入非常少。

## Tips

如果不想引进所有组件，每一个`rs`组件都可以通过npm包方式直接安装。
