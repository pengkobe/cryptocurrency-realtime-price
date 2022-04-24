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

## Run

```bash
git clone https://github.com/pengkobe/cryptocurrency-realtime-price

# In china mainland
# npm install --registry=https://registry.npm.taobao.org
npm install

# configure your redis at ./config/config.default.ts
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

```bash
npm run clean
npm run build
easy zip
```

copy the zip file you generated to to your server

```bash
unzip your_zip_filename
cd your_unzip_directory
npm install --production
npm run backend
```

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

## License

[MIT](LICENSE)
