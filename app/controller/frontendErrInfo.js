'use strict';

const Controller = require('egg').Controller;

class FrontendErrInfoController extends Controller {
  // constructor(props) {
  //   super(props);
  // }

  async index() {
    const { ctx } = this;
    // console.log(ctx.query);
    // ctx.body = { info: true };
    const newsList = await ctx.service.frontendErrInfo.index(ctx.query);
    // console.log(newsList)
    ctx.body = { list: newsList };
    ctx.status = 200;
  }
}

module.exports = FrontendErrInfoController;
