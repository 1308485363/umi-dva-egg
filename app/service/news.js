const Service = require('egg').Service;

class NewsService extends Service {
    async list(page = 1) {
        // read config
        const { serverUrl, pageSize } = this.config.news;
    
        // use build-in http client to GET hacker-news api
        const dataList = {
            list: [
              { id: 1, title: 'this is news 1', url: '/news/1', time: 213213 },
              { id: 2, title: 'this is news 2', url: '/news/2', time: 213 }
            ],
            time: 213231
        };

        // const res = await this.ctx.curl('www.baidu.com');
    
        // parallel GET detail
        // const newsList = await Promise.all(
        //   Object.keys(idList).map(key => {
        //     const url = `${serverUrl}/item/${idList[key]}.json`;
        //     return this.ctx.curl(url, { dataType: 'json' });
        //   })
        // );
        return dataList;
      }
}

module.exports = NewsService;