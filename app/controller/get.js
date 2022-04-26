'use strict';

const Controller = require('egg').Controller;

class getController extends Controller {
  // 自由传参模式
  async getSchoolNotice() {
    const {
      ctx,
    } = this;
    ctx.body = ctx.query;
  }

  // 严格传参模式
  async getSchoolNotice2() {
    const {
      ctx,
    } = this;
    ctx.body = `恭喜您被${ctx.params.school}录用，欢迎您来我校${ctx.params.level}学习`;
    // ctx.body = '恭喜您被' + ctx.params.school + '录用，欢迎您来我校' + ctx.params.level + '学习';
  }
}

module.exports = getController;