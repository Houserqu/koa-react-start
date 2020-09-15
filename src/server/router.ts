import Router from 'koa-router';
import app from './controller/app';
import { useController } from './core/utils/router';
const router = new Router();

useController(router, [app])

export default router;
