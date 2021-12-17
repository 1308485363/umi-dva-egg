'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    // console.log(ctx.query);
    // ctx.body = { info: true };
    const logger = ctx.getLogger('fontendErrLogger');
    logger.error(JSON.stringify(ctx.query));
    ctx.status = 200;
    // ctx.body = { status: 400 };
  }
}

module.exports = LoginController;
