'use strict';

const Controller = require('egg').Controller;

class roleController extends Controller {
  // 获取所有资源
  async getResource() {
    const {
      ctx,
    } = this;
    const data = await ctx.service.role.getResource();
    let body;
    if (data) {
      body = {
        code: 20000,
        data,
      };
    } else {
      body = {
        code: 50000,
        message: '获取资源失败',
      };
    }
    ctx.body = body;
  }

  // 设置角色资源
  async setResource() {
    const {
      ctx,
    } = this;
    const params = ctx.request.body;
    const data = await ctx.service.role.setResource(params);
    let body;
    if (data) {
      body = {
        code: 20000,
        data: '设置成功',
      };
    } else {
      body = {
        code: 50000,
        message: '设置资源失败',
      };
    }
    ctx.body = body;
  }

  // 更新用户信息
  async updateUserInfo() {
    const {
      ctx,
    } = this;
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

module.exports = roleController;
