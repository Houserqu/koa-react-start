import { Context } from 'koa';
import Controller from '../core/decorator/controller';
import { Get } from '../core/decorator/method';

@Controller('app')
export default class app {
  @Get('app')
  async app(ctx: Context): Promise<void> {
    ctx.body = {
      code: 0,
      msg: 'app',
      data: {},
    };
  }

  @Get('home')
  async home(ctx: Context): Promise<void> {
    ctx.body = {
      code: 0,
      msg: 'home',
      data: {},
    };
  }
}