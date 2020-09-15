import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import statics from 'koa-static';
import path from 'path';
import router from './router';

const app = new Koa();
app.use(bodyParser());

// 配置静态资源
const staticPath =
  process.env.NODE_ENV === 'production' ? '../../../public' : '../../public';
app.use(statics(path.join(__dirname, staticPath)));

// 路由
app.use(router.routes()).use(router.allowedMethods());

// 启动服务
const port = 8010;
app.listen(port, process.env.NODE_ENV === 'production' ? '' : '', () => {
  console.log(`server is running at port ${port}`);
});
