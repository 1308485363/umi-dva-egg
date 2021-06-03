/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1620388322274_1849';

  // 添加view配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    }
  }

  // 跨域
  // config.cors = {
  //   origin: '*',
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  // }

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  }

  // add your middleware config here
  config.middleware = [];

  // 中间件匹配路由
  // config.auth = {
  //   enable: true,
  //   match: ['/news']
  // }

  config.assets = {
    publicPath: '/public/',
    devServer: {
        debug: false,
        command: 'umi dev',
        port: 8000,
        env: {
            APP_ROOT: process.cwd() + '/src',
            BROWSER: 'none',
            ESLINT: 'none',
            SOCKET_SERVER: 'http://127.0.0.1:8000',
            PUBLIC_PATH: 'http://127.0.0.1:8000',
        },
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
