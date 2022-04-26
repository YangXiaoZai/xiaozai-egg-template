'use strict';

const Controller = require('egg').Controller;

class studentsManagerController extends Controller {
  async addStudent() {
    const {
      ctx,
    } = this;
    const params = {
      name: '孙悟空',
      class: '一班',
      major: '精斗云',
    };
    const res = await ctx.service.testdb.addStudent(params);
    if (res) {
      ctx.body = '增加学生-成功';
    } else {
      ctx.body = '增加学生-失败';
    }
  }

  async delStudent() {
    const {
      ctx,
    } = this;
    const params = {
      id: 4,
    };
    const res = await ctx.service.testdb.delStudent(params);
    if (res) {
      ctx.body = '删除学生-成功';
    } else {
      ctx.body = '删除学生-失败';
    }
  }

  async updateStudent() {
    const {
      ctx,
    } = this;
    const params = {
      id: 1,
      class: '孙悟空',
      major: '火焰节',
    };
    const res = await ctx.service.testdb.updateStudent(params);
    if (res) {
      ctx.body = '修改学生-成功';
    } else {
      ctx.body = '修改学生-失败';
    }

  }

  async getStudents() {
    const {
      ctx,
    } = this;
    const res = await ctx.service.testdb.getStudents();
    ctx.body = JSON.stringify(res);
  }
}

module.exports = studentsManagerController;