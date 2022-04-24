import { Controller, Context } from 'egg';

export default class SettingController extends Controller {

  public async home(ctx: Context) {
    await ctx.render('main.js', { url: ctx.url, list: await ctx.service.price.getPrices() });
  }

  public async prices(ctx: Context) {
    ctx.body = await ctx.service.price.getPrices();
  }
}