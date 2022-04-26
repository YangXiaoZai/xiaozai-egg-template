'use strict';

const Controller = require('egg').Controller;


const data = [{
  id: 1,
  name: '小红',
  class: '一年级',
}, {
  id: 2,
  name: '小李',
  class: '二年级',
}, {
  id: 3,
  name: '小名',
  class: '三年级',
}];

class classController extends Controller {
  // 查询所有学生
  async index() {
    const {
      ctx,
    } = this;
    ctx.body = {
      status: 200,
      data,
    };
  }

  // 查询某个学生
  async show() {
    const {
      ctx,
    } = this;
    const details = data.find(item => ctx.params.id == item.id);
    const student = details ? [details] : null;
    ctx.body = {
      status: 200,
      data: student,
    };
  }

  // 添加某个学生
  async create() {
    const {
      ctx,
    } = this;
    const params = ctx.request.body;
    data.push({
      ...params,
      id: data.length + 1,
    });
    ctx.body = {
      status: 200,
      data: '添加成功',
    };
  }

  // 更新某个学生
  async update() {
    const {
      ctx,
    } = this;
    const index = data.findIndex(item => item.id == ctx.params.id);
    data[index] = {
      ...data[index],
      ...ctx.request.body,
    };
    ctx.body = {
      status: 200,
      data: '更新成功',
    };

  }

  // 删除某个学生
  async destroy() {
    const {
      ctx,
    } = this;
    const index = data.findIndex(item => ctx.params.id == item.id);
    data.splice(index, 1);
    ctx.body = {
      status: 200,
      data: '删除成功',
    };
  }
}


module.exports = classController;