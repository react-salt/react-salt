# 快速上手

## 标准开发

实际项目开发中，需要对ES2015、JSX、LESS代码的构建、打包部署等有一系列工程化需求。我们提供了`rs-server`开发工具来辅助`React组件`开发。所有基础组件提供的npm包均为babel转换后的`ES5`版本。

### 1、安装开发工具

```
npm install rs-server --save-dev
npm run dev

// 需要事先添加以下scripts到package.json
"dev" : "node node_modules/.bin/rs-server"

// 目录结构参考
-readme.md
--examples/  // Demo目录
--assets/    // 样式文件，需要设定index.less为入口文件
--src/   // 存放组件文件，运行pre-publish会进行babel转码打包
 
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
    return <Grid data={props.data} />;
}

export default App;
```

### 4、开发调试

访问`http://127.0.0.1:7777`查看效果

## 兼容性

只支持现代浏览器和IE8及以上，前期开发基于Bootstrap3。

## Tips

建议使用整套框架，如果不想引进所有组件，每一个`rs-*`组件都可以通过`npm包`方式直接安装，并使用其样式。
