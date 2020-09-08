# koa-react-satrt

基于 Koa + React + Typescript 的项目脚手架, 适用于快速开始全栈项目开发。
大型项目需要自己进一步封装，也可以直接使用 nestjs、egg 等开发框架。针对 nestjs 的我也创建了起步项目，集成了常用功能，[请移步](https://github.com/Houserqu/nestjs-start)。

### 特点

- [Koa](https://koa.bootcss.com/) 用 async/await 解决回调问题的 web 框架
- [Typescript](https://www.tslang.cn/) 后端开发语言
- [React](https://zh-hans.reactjs.org/) 流行的单页应用库
- [Dva](https://dvajs.com/guide/) 对 redux 的封装，写起来更加方便
- [react-router-config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config) 基于 react-router 的配置式路由
- [styled-components](https://styled-components.com/) css-in-js 的优秀解决方案
- [pm2](https://pm2.keymetrics.io/) 生产环境默认 pm2 启动
- [eslint](https://cn.eslint.org/) 代码风格检查
- [prettier](https://prettier.io/) 代码格式化

### 开发

- `npm start` 生产环境启动，会先构建前后端代码，再用 pm2 启动
- `npm run dev` 本地开发模式，会启动前后端开发服务并自动监听文件改动
- `npm run webpack` 前端代码开发服务（一般不需要直接运行该命令）
- `npm run build` 构建前后端代码

如果生产环境不需要用 pm2 启动，可以在执行 `npm run build` 构建代码之后，直接 `NODE_ENV=production node dist/server/server.js` 运行