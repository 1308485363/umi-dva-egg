'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // console.log('jinru')
    await ctx.render('home.html');
    // ctx.body = 'aaa'
  }
}

module.exports = HomeController;
