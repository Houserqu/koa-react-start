import 'reflect-metadata'

type Method = 'get' | 'post' |'put'

export interface DecoratorRoute {
  path: string
  name: string | symbol
  method: Method
}

/**
 * Get 请求装饰器
 * @param path 
 */
export function Get(path: string): MethodDecorator {
  return injectRoute('get', path)
}

/**
 * Put 请求装饰器
 * @param path 
 */
export function Post(path: string): MethodDecorator {
  return injectRoute('post', path)
}

/**
 * 通用注册路由方法
 * 实现原理：通过装饰器获取路径和方法，再通过反射注入到 controlle 到 routes 属性中
 *         在 useController 方法获取所有 controller 的路由参数，配置到 router 中
 * @param method 
 * @param path 
 */
function injectRoute(method: Method, path: string): MethodDecorator {
  return (target, name) => {
    const paths = Reflect.getMetadata('routes', target)
    const route: DecoratorRoute = { path, name, method }

    if(paths && paths instanceof Array) {
      paths.push(route)
    } else {
      Reflect.defineMetadata("routes", [route], target);
    }
  }
}