# Cryptocurrency-Realtime-Price

> build a simple real-time application which monitors the prices of cryptocurrencies, such as Bitcoin, Ether, etc.  

Target architecture:  
![architecture](http://processon.com/chart_image/625a90a86376891e0fe51a07.png)

## [V.0.1.0](https://github.com/pengkobe/cryptocurrency-realtime-price/releases/tag/v0.1.0)

Click here to view the page: http://119.45.138.135:7001/

ps: v0.1.0 uses mocked data because of unknown network problems outside the wall.


## Related Repo

SEE:

https://github.com/pengkobe/cryptocurrency-realtime-price-http-scheduler

> to setup timer to load data from cryptonator

## TODO

1. [ ] Support unit test with egg-mocker + mocha
2. [ ] Support user personalized setting with Mongodb
3. [ ] Support deploy with Docker + k8s
4. [ ] Application Monitoring tools(ELK + Prometheus + Grafana)
5. [ ] Support Android and IOS


## Dependencies

- Egg： ^2.x.x
- Node: Node ^8.x.x+,
- Webpack: ^4.x.x
- React: ^16.0.0
- TypeScript: ^3.0.0
- [easywebpack-react](https://github.com/hubcarl/easywebpack)
- [egg-view-react-ssr](https://github.com/hubcarl/egg-view-react-ssr) 
- [egg-webpack](https://github.com/hubcarl/egg-webpack) 
- [egg-webpack-react](https://github.com/hubcarl/egg-webpack-react)




## Run


```bash
cnpm install

npm run dev
```

visit: http://127.0.0.1:7001


#### Build & Deploy

```bash
npm run clean
npm run build
easy zip
```


## Development

#### Front End

> `${root}/app/web/page/demo.tsx` 

```js
'use strict';
import React, { Component } from 'react';
class Demo extends Component<any, any> {
  render() {
    const { title, article } = this.props;
    return <div>
      <h1 className="easy-article-detail-title">{title}</h1>
      <h3 className="easy-article-detail-title">{article.title}</h3>
      <div>{article.content}</div>
    </div>;
  }
}
export default Demo;
```

#### NodeJS

> `${root}/app/controller/demo.ts`

```js
import { Controller, Context } from 'egg';

export default class DemoController extends Controller {
  public async index(ctx: Context) {
    const title = 'Node render';
    const article = await ctx.service.article.query({ id: Number(id) });
    await ctx.render('demo.js', { title, article });
  }
}
```

#### Egg Route

> `${root}/app/router.ts`

```js
import { Application } from 'egg';
export default (app: Application) => {
  const { router, controller } = app;
  router.get('/demo', controller.demo.index);
};
```

#### Webpack configuration

> `${root}/webpack.config.js` 

```js
module.exports = {
  entry: {
    demo: 'app/web/page/demo.tsx',
  }
}
```


## License

[MIT](LICENSE)
