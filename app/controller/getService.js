'use strict';

const Controller = require('egg').Controller;

class getService extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    ctx.body = await ctx.service.getSchool.index(ctx.params.id);
  }
}
module.exports = getService;