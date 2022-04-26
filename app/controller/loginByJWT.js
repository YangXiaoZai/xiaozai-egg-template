'use strict';

const Controller = require('egg').Controller;

class loginController extends Controller {
  async index() {
    const {
      ctx,
      app,
    } = this;
    const params = ctx.request.body;
    if (params.user === 'admin' && params.password == 'admin') {
      const token = app.jwt.sign(params.user, app.config.jwt.secret);
      ctx.body = {
        token,
      };
    } else {
      ctx.body = {
        code: 40000,
        msg: '账号或密码错误',
      };
    }
  }

  async getInfo() {
    const {
      ctx,
    } = this;
    ctx.body = {
      code: 20000,
      data: '获取数据成功',
    };
  }
}

module.exports = loginController;