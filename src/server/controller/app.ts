import { Context } from "koa";

export async function app(ctx: Context) {
  ctx.body = {
    code: 0,
    msg: '成功',
    data: {},
  };
}
