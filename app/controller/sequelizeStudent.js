'use strict';

const Controller = require('egg').Controller;

class sequelizeStudent extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    const data = await ctx.service.student.getStudents();
    let body;
    if (data) {
      body = {
        code: 20000,
        data,
      };
    } else {
      body = {
        code: 50000,
        msg: '系统异常，请联系管理员',
      };
    }
    ctx.body = body;
  }

  async show() {
    const {
      ctx,
    } = this;
    const id = ctx.params.id;
    const data = await ctx.service.student.getStudents(id);
    let body;
    if (data) {
      body = {
        code: 20000,
        data,
      };
    } else {
      body = {
        code: 50000,
        msg: '系统异常，请联系管理员',
      };
    }
    ctx.body = body;
  }

  async create() {
    const {
      ctx,
    } = this;
    const params = ctx.request.body;
    const data = await ctx.service.student.createStudent(params);
    let body;
    if (data) {
      body = {
        code: 20000,
        msg: '创建成功',
      };
    } else {
      body = {
        code: 50000,
        msg: '系统异常，请联系管理员',
      };
    }
    ctx.body = body;

  }

  async update() {
    const {
      ctx,
    } = this;

    const id = ctx.params.id;
    const params = ctx.request.body;
    const data = await ctx.service.student.updateStudent({
      ...params,
      id,
    });
    let body;
    if (data) {
      body = {
        code: 20000,
        msg: '修改成功',
      };
    } else {
      body = {
        code: 50000,
        msg: '系统异常，请联系管理员',
      };
    }
    ctx.body = body;
  }

  async destroy() {
    const {
      ctx,
    } = this;
    const id = ctx.params.id;
    const data = await ctx.service.student.destroyStudent(id);
    let body;
    if (data) {
      body = {
        code: 20000,
        msg: '删除成功',
      };
    } else {
      body = {
        code: 50000,
        msg: '系统异常，请联系管理员',
      };
    }
    ctx.body = body;
  }
}

module.exports = sequelizeStudent;