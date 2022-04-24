
import { Application } from 'egg';
export default (app: Application) => {
  const { router, controller } = app;

  // for websocket request
  app.io.of('/').route('join', app.io.controller.default.join);

  // for http request
  router.get('/api/main/prices', controller.main.prices);
  router.get('/(.*?)', controller.main.home);
};
