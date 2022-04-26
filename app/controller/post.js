'use strict';

const Controller = require('egg').Controller;

class postController extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    // ctx.body = ctx.request.body;
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }
}

module.exports = postController;