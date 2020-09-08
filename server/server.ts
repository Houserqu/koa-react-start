import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import statics from 'koa-static';
import path from 'path';
import router from './router';
import ajax from '@utils/ajax';

const app = new Koa();
app.use(bodyParser());
// 配置静态资源
const staticPath = process.env.NODE_ENV === 'production' ? '../../public' : '../public';

app.use(statics(path.join(__dirname, staticPath)));

app.use(router.routes()).use(router.allowedMethods());

app.listen(8010, process.env.NODE_ENV === 'production' ? '' : '');
