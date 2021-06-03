const Controller = require('egg').Controller;

class UserController extends Controller {
    async info() {
      this.ctx.body = `user: ${this.ctx.params.id}, ${this.ctx.params.name}`
      console.log(this.ctx.query.abs.split(','));
    }
}

module.exports = UserController;