'use strict';
const data = {
  list: [{
    id: 1, name: 'Bitcoin', "base": "BTC", "target": "USD", "price": "443.7807865468", "volume": "31720.1493969300", "change": "0.3766203596"
  }, {
    id: 2, name: 'Ether', "base": "ETH", "target": "USD", "price": "3071.66499933", "volume": "98621.75069813", "change": "-6.53206258"
  }, {
    id: 3, name: 'Litecoin', "base": "LTC", "target": "USD", "price": "3071.66499933", "volume": "98621.75069813", "change": "-6.53206258"
  }, {
    id: 4, name: 'Monero', "base": "xmr", "target": "USD", "price": "3071.66499933", "volume": "98621.75069813", "change": "-6.53206258"
  }, {
    id: 5, name: 'Ripple', "base": "xrp", "target": "USD", "price": "3071.66499933", "volume": "98621.75069813", "change": "-6.53206258"
  }, {
    id: 6, name: 'Dogecoin', "base": "doge", "target": "USD", "price": "3071.66499933", "volume": "98621.75069813", "change": "-6.53206258"
  }, {
    id: 7, name: 'Dash', "base": "dash", "target": "USD", "price": "3071.66499933", "volume": "98621.75069813", "change": "-6.53206258"
  }, {
    id: 8, name: 'MaidSafeeCoin', "base": "maid", "target": "USD", "price": "3071.66499933", "volume": "98621.75069813", "change": "-6.53206258"
  }, {
    id: 9, name: 'Lisk', "base": "lsk", "target": "USD", "price": "3071.66499933", "volume": "98621.75069813", "change": "-6.53206258"
  }, {
    id: 10, name: 'Storjcoin', "base": "sjcx", "target": "USD", "price": "3071.66499933", "volume": "98621.75069813", "change": "-6.53206258"
  }]
};

let initId = 1;

data.list.forEach(item => {
  item.id = initId++;
});

const total = data.list.length;
export function getPage(pageIndex = 1, pageSize = 10) {
  const start = (pageIndex - 1) * pageSize;
  const end = start + Number(pageSize);
  return { list: data.list.slice(start, end), total };
}
export function getDetail(id: number) {
  return data.list.filter(item => {
    return item.id === id;
  }).slice(0, 1);
}