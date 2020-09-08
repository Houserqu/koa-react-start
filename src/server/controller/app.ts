import { Context } from 'koa';

export async function app(ctx: Context): Promise<void> {
  ctx.body = {
    code: 0,
    msg: '成功',
    data: {},
  };
}
