import { Controller, Context } from 'egg';
import { deserialize } from '@hubcarl/json-typescript-mapper';
import Condition from '../lib/condition';

export default class SettingController extends Controller {

  public async home(ctx: Context) {
    await ctx.render('main.js', { url: ctx.url, list: await ctx.service.price.getPrices() });
  }

  public async prices(ctx: Context) {
    ctx.body = await ctx.service.price.getPrices();
  }

  // todo:
  public async detail(ctx: Context) {
    const { name } = ctx.params;
    const setting = await ctx.service.setting.query({ name: name });
    ctx.body = { setting };
  }

  // todo:
  public async list(ctx: Context) {
    const condition = deserialize(Condition, ctx.request.body);
    ctx.body = await ctx.service.setting.getSettingList(condition);
  }

}