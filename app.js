// app.js
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  configWillLoad() { }
  async didLoad() { }

  // init data from redis
  async willReady() {
    const list = ["Bitcoin", "Ether", "Litecoin", "Monero", "Ripple", "Dogecoin", "Dash", "MaidSafeeCoin", "Lisk", "Storjcoin"];
    let ret = [];
    for (let name of list) {
      let tmp = await this.app.redis.get('for_cache').get(name);
      tmp = JSON.parse(tmp);
      ret.push(tmp)
    }
    console.warn('i am here!!!', ret)
    this.app.priceCache = ret;
  }

  async didReady() {}
  async serverDidReady() { }
}

module.exports = AppBootHook;