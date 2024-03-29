# Cryptocurrency-Realtime-Price
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]

[travis-image]: https://img.shields.io/travis/pengkobe/Cryptocurrency-Realtime-Price.svg?style=flat-square
[travis-url]: https://travis-ci.org/pengkobe/Cryptocurrency-Realtime-Price
[codecov-image]: https://codecov.io/github/pengkobe/Cryptocurrency-Realtime-Price/coverage.svg?branch=master
[codecov-url]: https://codecov.io/github/pengkobe/Cryptocurrency-Realtime-Price?branch=master


> build a simple real-time application which monitors the prices of cryptocurrencies, such as Bitcoin, Ether, etc.  

Target architecture:  
![architecture](http://processon.com/chart_image/6267e1650e3e742d46149f92.png)

## Release history

### **[V.0.2.0](https://github.com/pengkobe/cryptocurrency-realtime-price/releases/tag/v0.2.0) now released!!!**
Click here to view: http://realtimeprice.yipeng.info/

#### [V.0.1.0](https://github.com/pengkobe/cryptocurrency-realtime-price/releases/tag/v0.1.0)
ps: v0.1.0 uses mocked data because of unknown network problems outside the wall.

## Get Start

notes: **You got to start *cryptocurrency-realtime-price-http-scheduler*  first before you start**  
SEE:  
https://github.com/pengkobe/cryptocurrency-realtime-price-http-scheduler
> setup scheduler to load data from nomics

```bash
git clone https://github.com/pengkobe/cryptocurrency-realtime-price
cd cryptocurrency-realtime-price
# In china mainland
# npm install --registry=https://registry.npm.taobao.org
npm install

# configure your redis at /config/config.default.ts
#  exports.redis = {
#     clients: {
#       for_sub_pub: {
#         port: your_port,          // Redis port
#         host: 'your_host',        // Redis host
#         password: 'your_password',// If you have set password
#         db: your_db_num,          // 0 ~ 15
#       },
#       for_cache: {
#         port: your_port,          // Redis port
#         host: 'your_host',        // Redis host
#         password: 'your_password',// If you have set password
#         db: your_db_num,          // 0 ~ 15
#       }
#     },
#   }

npm run dev
```

visit: http://127.0.0.1:7001


## Build & Deploy

Build:
```bash
npm run clean
npm run build
easy zip
```

copy the zip file you generated to server directory(We assume that is `cryptocurrency-realtime-price`) and Run in backend mode:
```bash
cd cryptocurrency-realtime-price
unzip your_zip_filename
npm install --production
npm run backend
```

## Repo Structure

```
cryptocurrency-realtime-price/
 ├── app.js (register application hooks to init data from redis)
 ├── app/
 │   ├── controller/
 │   │   ├── main.ts (Server-Side Rendering and async data api)
 │   │   ├── io/
 │   │   │    ├── controller/
 │   │   │    │    ├── default.ts (deal with websocket events)
 │   │   │    ├── middleware/
 │   │   │    │    ├── connection.ts (deal with websocket connections and listening for currency update information)
 │   ├── service/
 │   │   ├── price.ts (load price from application cache)
 │   ├── view/ (EggJS need to keep this dir exists)
 │   ├── web/ (react web app)
 │   │   ├── asset/ (images and normalize css)
 │   │   ├── component/layout/index.tsx (html layout)
 │   │   ├── framework  (bootstrap layout)
 │   │   │   ├── app.tsx (render and route business)
 │   │   │   ├── request.tsx (load data async with axios)
 │   │   ├── page/main/   (Cryptocurrency-Realtime-Price main page, based on react + redux)
 │   │   │   ├── Router
 │   │   │   │   ├── home.tsx/css
 │   │   │   │   ├── index.tsx
 │   │   │   │   ├── route.tsx
 │   │   │   ├── store/
 │   │   │   │   ├── actions.tsx
 │   │   │   │   ├── constant.ts
 │   │   │   │   ├── index.tsx
 │   │   │   │   ├── reducers.ts
 │   │   │   ├── view/
 │   │   ├── tsconfig.json
 │   ├── router.ts (EggJS route setting)
 ├── config/ (EggJS default config files)
 │   ├── config.default.ts (set redis and socket.io configurations)
 │   ├── config.local.ts
 │   ├── config.prod.ts
 │   ├── config.test.ts
 │   ├── plugin.ts  (set redis and socket.io configurations)
 │   ├── tsconfig.json
 ├── webpack.config.js (need to set build entry)
 ├── postcss.config.js
 ├── babel.config.js
 ├── tsconfig.json
 ├── tslint.json
 ├── Dockerfile (working on now)
 ├── .travis.yml (working on now)
```

## TODO

1. [ ] Support unit test with egg-mocker + mocha (**working on add_test branch**)
2. [ ] Support user personalized setting with Mongodb
3. [ ] Support deploy with Docker + k8s
4. [ ] Application Monitoring tools(ELK + Prometheus + Grafana)
5. [ ] Support Android and IOS (**working on[cryptocurrency-realtime-price-app](https://github.com/pengkobe/cryptocurrency-realtime-price-app)**)
6. [ ] CI/CD (**working on add_test branch**)

## Related Repo
> I'm working on now. unfinished yet :)

- [cryptocurrency-realtime-price-app](https://github.com/pengkobe/cryptocurrency-realtime-price-app)
- [cryptocurrency-realtime-price-vue](https://github.com/pengkobe/cryptocurrency-realtime-price-vue)
- [cryptocurrency-realtime-price-angular](https://github.com/pengkobe/cryptocurrency-realtime-price-angular)

## Dependencies

- Egg： ^2.x.x
- Node: ^8.x.x+,
- Webpack: ^4.x.x
- React: ^16.0.0
- TypeScript: ^3.0.0
- [easywebpack-react](https://github.com/hubcarl/easywebpack)
- [egg-view-react-ssr](https://github.com/hubcarl/egg-view-react-ssr) 
- [egg-webpack](https://github.com/hubcarl/egg-webpack) 
- [egg-webpack-react](https://github.com/hubcarl/egg-webpack-react)

## License

[MIT](LICENSE)
