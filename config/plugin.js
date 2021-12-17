'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },

  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },

  // egg-view-assets 提供了通用的静态资源管理和本地开发方案
  assets: {
    enable: true,
    package: 'egg-view-assets',
  },
};
