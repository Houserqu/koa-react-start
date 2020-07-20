# koa-react-satrt

基于 koa 和 react 的脚手架

### 特点

- [Koa](https://koa.bootcss.com/) 用 async/await 解决回调问题的 web 框架
- [Typescript](https://www.tslang.cn/) 后端开发语言
- [React](https://zh-hans.reactjs.org/) 流行的单页开发库
- [Dva](https://dvajs.com/guide/) 对 redux 的封装，写起来更加方便
- [react-router-config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config) 基于 react-router 的配置式路由
- [Material](https://material-ui.com/zh/) 谷歌出品的 UI 库
- [pm2](https://pm2.keymetrics.io/) 生产环境默认 pm2 启动
- [eslint](https://cn.eslint.org/) 代码风格检查
- [prettier](https://prettier.io/) 代码格式化

### 开发

- 只有后端代码使用了 Typescript，个人觉得在前端代码中使用 Typescript 写起来很繁琐
- `npm start` 生产环境启动，会先构建前后端代码
- `npm run dev` 本地开发模式
- `npm run webpack` 前端代码开发服务
- `npm run build` 构建前后端代码