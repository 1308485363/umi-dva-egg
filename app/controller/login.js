'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async info() {
    const { ctx } = this;
    // console.log('jinru')
    // ctx.body = { info: true };
    ctx.status = 404;
    // ctx.body = { status: 400 };
  }
}

module.exports = LoginController;
