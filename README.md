# cryptocurrency-realtime-price

> build a simple real-time application which monitors the prices of cryptocurrencies, such as Bitcoin, Ether, etc.  

![architecture](http://processon.com/chart_image/625a90a86376891e0fe51a07.png)

## 依赖

- Egg： ^2.x.x
- Node: Node ^8.x.x+,
- Webpack: ^4.x.x
- React: ^16.0.0
- TypeScript: ^3.0.0
- [easywebpack-react](https://github.com/hubcarl/easywebpack)
- [egg-view-react-ssr](https://github.com/hubcarl/egg-view-react-ssr) 
- [egg-webpack](https://github.com/hubcarl/egg-webpack) 
- [egg-webpack-react](https://github.com/hubcarl/egg-webpack-react)


## 特性

- 支持 Egg Node 端代码和前端代码 TypeScript 编写和构建

- 支持 Node 和 asyncData 方式获取数据进行渲染

- 支持多页面(MPA) 和 单页面(SPA) 服务端渲染(SSR)和前端渲染(CSR)

- 支持 Webpack 时时编译和热更新, `npm run dev` 一键启动应用

- 支持开发环境, 测试环境，正式环境 Webpack 编译
 

## 运行

#### 安装依赖

```bash
cnpm install
```

#### 本地启动应用

```bash
npm run dev
```

应用访问: http://127.0.0.1:7001

#### 构建文件

- TypeScript Egg 构建

```bash
npm run tsc
```

- TypeScript 前端工程构建

```bash
npm run build
```

#### 打包部署

1. 先运行 `npm run tsc` 和 `npm run build` 构建 TypeScript Egg 代码和 TypeScript 前端代码
2. 项目代码和构建代码一起打包代码
3. 应用部署后，通过 `npm start` 启动应用


## 开发

#### 编写前端代码

>添加 `${root}/app/web/page/demo.tsx` 前端代码

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

#### 编写 Node 代码

>添加 `${root}/app/controller/demo.ts` Node 代码

```js
import { Controller, Context } from 'egg';

export default class DemoController extends Controller {
  public async index(ctx: Context) {
    const title = 'Node 直接获取渲染数据';
    const article = await ctx.service.article.query({ id: Number(id) });
    await ctx.render('demo.js', { title, article });
  }
}
```

#### Egg 路由配置 

>添加 `${root}/app/router.ts` Egg 路由配置

```js
import { Application } from 'egg';
export default (app: Application) => {
  const { router, controller } = app;
  router.get('/demo', controller.demo.index);
};
```

#### Webpack 构建配置

>添加 `${root}/webpack.config.js` 新增页面 entry 配置

```js
module.exports = {
  entry: {
    demo: 'app/web/page/demo.tsx',
  }
}
```


## License

[MIT](LICENSE)
