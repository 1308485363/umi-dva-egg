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

  config.listen = {
    port: 10341,
    hostname: '127.0.0.1', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
    // path: '/var/run/egg.sock',
  };

  return config;
};
