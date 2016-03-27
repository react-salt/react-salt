# React Salt组件解决方案

一套前端设计语言和基于React的实现

## For Developer

* npm install
* gulp serve || DEBUG=* node app.js

开发项目由git管理，发布项目由npm设置

### Tips

* Combine your commits before merge to keep our commit record clean
* Avoid custom stylesheet
* Code in ES6

## 开发文档

* 组件开发基础工具: https://github.com/regether/rs-server

## For User

* refer to files in the app directory

## 最新设想

之前遇到一些问题，比如想要给form依赖message，不太好做，没必要给form添加这样的依赖。不过在salt这一层，其实是可以再做一些封装的，认为把他们关联起来。所以思维方式就是，如果用户将来用了整套的salt组件，而经常要做一些定向操作，那么我们就应该在salt这一层提供相关的封装
