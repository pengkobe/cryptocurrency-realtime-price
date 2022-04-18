import * as path from 'path';
import * as fs from 'fs';
import { EggAppConfig } from 'egg';
export default function (app: EggAppConfig) {
  const exports: any = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  exports.keys = '123456';

  exports.middleware = [
    'locals',
    // 'access'
  ];

  exports.reactssr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html')
  };

  exports.io = {
    init: {}, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: ['connection'],
        packetMiddleware: [],
      },
    },
    redis: {
      host: '127.0.0.1',
      port: 6379,
      auth_pass: '123456',
      db: 11
    }
  };

  exports.redis = {
    clients: {
      for_sub_pub: {
        port: 6379,          // Redis port
        host: '127.0.0.1',   // Redis host
        password: '123456',
        db: 10,
      },
      for_cache: {
        port: 6379,          // Redis port
        host: '127.0.0.1',   // Redis host
        password: '123456',
        db: 11,
      }
    },
  }

  return exports;
}
