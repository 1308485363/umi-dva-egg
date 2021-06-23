'use strict';

module.exports = (appInfo) => {
  const config = (exports = {});

  config.assets = {
    publicPath: '/public/',
  };

  // 对于静态资源，prod环境下开启gzip，能减少60%的大小
  config.static = {
    gzip: true,
  };

  return config;
};
