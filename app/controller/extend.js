'use strict';

const Controller = require('egg').Controller;

class extendController extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    // console.log(ctx.query)
    console.log(ctx.getParams('id'));
    ctx.body = ctx.getParams('id');
  }
  async token() {
    const {
      ctx,
    } = this;
    console.log(ctx.request.token);
    ctx.body = {
      status: 200,
      body: ctx.request.token,
    };
  }
  async setToken() {
    const {
      ctx,
    } = this;
    ctx.response.token = 'response xiaozai';
    ctx.body = '123';
  }
  async helper() {
    const {
      ctx,
    } = this;
    const str = ctx.helper.Base64Encode('hello world');
    ctx.body = str;
  }
}

module.exports = extendController;