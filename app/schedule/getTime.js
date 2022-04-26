'use strict';

const Subscription = require('egg').Subscription;

class getTime extends Subscription {
  static get schedule() {
    return {
      // interval: '2s', // 方式1
      cron: '*/5 * * * * *',
      type: 'worker',
    };
  }
  async subscribe() {
    // 定时输出
    // console.log(Date.now());
  }
}

module.exports = getTime;