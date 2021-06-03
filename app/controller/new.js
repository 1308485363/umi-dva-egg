const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
      const ctx = this.ctx;
      ctx.redirect('http://127.0.0.1:10241/api/search?name=egg')
      const page = ctx.query.page || 1;
      const newsList = await ctx.service.news.list(page);
      await ctx.render('list.html', newsList);
    }
}

module.exports = NewsController;