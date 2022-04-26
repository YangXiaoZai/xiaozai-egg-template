'use strict';

const Service = require('egg').Service;

class getSchoolService extends Service {
  async index(id) {
    return {
      id,
      name: '清华大学',
      major: '计算机',
    };
  }
}

module.exports = getSchoolService;