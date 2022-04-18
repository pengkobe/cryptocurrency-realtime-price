import { Service } from 'egg';

export default class PriceService extends Service {
  constructor(ctx) {
    super(ctx);
    this.context = ctx;
  }

  async getPrices() {
    return this.ctx.app.priceCache;
  }

}
