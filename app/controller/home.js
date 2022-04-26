'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    ctx.body = 'hi, 小在';
  }
  async xiaozai() {
    const {
      ctx,
    } = this;
    ctx.body = '<h1>小在</h1>';
  }
}

module.exports = HomeController;
