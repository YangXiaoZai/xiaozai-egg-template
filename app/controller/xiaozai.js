'use strict';
// 1 严格模式
// 2 引用Controller
// 3 定义一个Controller类
// 4 暴露出来

const Controller = require('egg').Controller;

class xiaozaiController extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    ctx.body = '<h1>小在的Controller</h1>';
  }
  async getMoney() {
    const {
      ctx,
    } = this;
    await new Promise(reslove => {
      setTimeout(() => {
        reslove(ctx.body = '<h1>先赚他一个亿</h1>');
      }, 5000);
    });
  }
}

module.exports = xiaozaiController;
