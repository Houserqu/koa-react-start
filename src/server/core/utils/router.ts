import "reflect-metadata"
import Router from "koa-router";
import { DecoratorRoute } from '../decorator/method'
import path from 'path'

/**
 * 绑定 controller 与路由
 * @param router 
 * @param controllers 
 */
export function useController(router: Router, controllers: any[]): void {
  for (const controller of controllers) {
    // controller 定义的路由前缀
    const pathPre = Reflect.getMetadata("path", controller);

    // controller 中每个方法定义的路由
    const routes: DecoratorRoute[] = Reflect.getMetadata("routes", controller.prototype);
    

    const instance = new controller();
    for (const route of routes) {
      if(process.env.NODE_ENV === 'dev') {
        console.log('regist route: ', path.resolve('/', pathPre, route.path))
      }

      // 注册路由
      router[route.method](path.resolve('/', pathPre, route.path), async ctx => {
        await instance[route.name](ctx);
      });
    }
  }
}