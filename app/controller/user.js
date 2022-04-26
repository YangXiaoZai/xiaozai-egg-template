'use strict';

const Controller = require('egg').Controller;

class userController extends Controller {
  // 用户登录
  async login() {
    const { ctx } = this;
    const params = ctx.request.body;
    const data = await ctx.service.user.login(params);
    let body;
    if (data) {
      body = {
        code: 20000,
        data: {
          token: data,
        },
      };
    } else {
      body = {
        code: 50000,
        message: '账号或密码错误',
      };
    }
    ctx.body = body;
  }

  // 获取用户信息
  async getUserInfo() {
    const { ctx } = this;
    const token = ctx.request.header.authorization.split(' ')[1];
    const params = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
    const data = await ctx.service.user.getUserInfo(params);
    let body;
    if (data) {
      body = {
        code: 20000,
        data,
      };
    } else {
      body = {
        code: 50000,
        message: '获取用户信息失败',
      };
    }
    ctx.body = body;
  }

  // 更新用户信息
  async updateUserInfo() {
    const { ctx } = this;
    const params = ctx.request.body;
    const data = await ctx.service.user.updateUserInfo(params);
    let body;
    if (data) {
      body = {
        code: 20000,
        data,
      };
    } else {
      body = {
        code: 50000,
        message: '更新用户信息失败',
      };
    }
    ctx.body = body;
  }
}

module.exports = userController;
