'use strict';

const Controller = require('egg').Controller;

class useView extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    // xiaozai.html与view文件夹下文件对应
    await ctx.render('xiaozai.html', {
      school: '清华大学',
      major: '计算机',
      subject: ['计算机组成原理', '计算机发展史', '网络安全管理'],
    });
  }
}

module.exports = useView;