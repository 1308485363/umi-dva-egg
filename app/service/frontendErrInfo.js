const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');
const ASYNC = require('async');
const sourceMap = require('source-map');

class FrontendErrInfoService extends Service {
  async index(page = 1) {
    try {
      const _ = this;
      let content = fs.readFileSync(
        path.join('/Users/yangzhe', 'logs/fontend-error-web.log'),
        'utf-8',
      );
      content = content.split('\n');
      let newList = [];
      for (let i = 0; i <= content.length; i++) {
        if (content[i]) {
          let time = content[i].split(',')[0];
          let params = JSON.parse(content[i].match(/\{(.+?)\}/)[0]);
          if (params.lineno || params.colno) {
            let soucreCode = await this.ctx.service.generateLine.searchSource(
              path.join(this.config.baseDir, 'app/public/umi.9715dfcf.js.map'),
              params.lineno,
              params.colno,
            );
            newList[i] = new Promise(function (resolve, reject) {
              // return { time, ...params, ...soucreCode };
              resolve({ time, ...params, ...soucreCode });
            });
          } else {
            newList[i] = new Promise(function (resolve) {
              // return { time, ...params };
              resolve({ time, ...params });
            });
          }
        }
      }

      return Promise.all(newList).then((res) => {
        return res;
      });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = FrontendErrInfoService;
