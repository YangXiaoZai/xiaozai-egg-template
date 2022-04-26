'use strict';

const Controller = require('egg').Controller;

class loginController extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    const params = ctx.request.body;
    if (params.user === 'admin' && params.password == 'admin') {
      ctx.session.userName = params.user;
      console.log(ctx.session);
      ctx.body = '登录成功';
    } else {
      ctx.body = '登录失败';
    }
  }

  async getInfo() {
    const {
      ctx,
    } = this;
    // TODO有点问题
    console.log(ctx.session);
    if (ctx.session.userName) {
      ctx.body = '获取用户信息成功';
    } else {
      ctx.body = '获取用户信息失败';
    }
  }
}

module.exports = loginController;