import { Service } from 'egg';

export default class PriceService extends Service {
  context: any;
  constructor(ctx) {
    super(ctx);
    this.context = ctx;
  }

  async getPrices() {
    const app: any = this.ctx.app;
    return app.priceCache;
  }

}
