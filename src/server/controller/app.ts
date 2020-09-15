import { Context } from 'koa';
import Controller from '../core/decorator/controller';
import { Get } from '../core/decorator/method';

@Controller('app')
export default class app {
  @Get('app')
  async app(ctx: Context): Promise<any>{
    console.log(ctx.query)
    return 'hello';
  }
}