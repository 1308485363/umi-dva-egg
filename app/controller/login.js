'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async info() {
    const { ctx } = this;
    // console.log('jinru')
    ctx.body = { info: true }
  }
}

module.exports = LoginController;
