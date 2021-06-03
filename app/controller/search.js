const Controller = require('egg').Controller;

class SearchController extends Controller {
    async uppercase() {
      const ctx = this.ctx;
    //   console.log(ctx)
      const start = Date.now();
      ctx.body = `search: ${ctx.query.name}`
      const used = Date.now() - start;
      ctx.set('date', used.toString());
    }
}

module.exports = SearchController;