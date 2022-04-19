import { Service } from 'egg';

export default class PriceService extends Service {
  context: any;
  constructor(ctx) {
    super(ctx);
    this.context = ctx;
  }

  async getPrices() {
    let app: any = this.ctx.app;
    return app.priceCache;
  }

}
