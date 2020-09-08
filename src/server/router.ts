import Router from 'koa-router';
import { app } from './controller/app';
const router = new Router();
// 进行兑换
router.get('/api/index', app);

export default router;
