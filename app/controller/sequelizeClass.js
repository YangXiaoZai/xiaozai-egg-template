'use strict';

const Controller = require('egg').Controller;

class sequelizeClass extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    const data = await ctx.model.Class.findAll();
    ctx.body = {
      code: 20000,
      data,
    };
  }

  async show() {
    const {
      ctx,
    } = this;
    const id = ctx.params.id;
    const data = await ctx.model.Class.findAll({
      where: {
        id,
      },
    });
    ctx.body = {
      code: 20000,
      data,
    };
  }

  async create() {
    const {
      ctx,
    } = this;
    const name = ctx.request.body.name;
    await ctx.model.Class.create({
      name,
    });
    ctx.body = '创建成功';
  }

  async update() {
    const {
      ctx,
    } = this;
    const id = ctx.params.id;
    const name = ctx.request.body.name;
    await ctx.model.Class.update({
      name,
    }, {
      where: {
        id,
      },
    });
    ctx.body = '更新成功';
  }

  async destroy() {
    const {
      ctx,
    } = this;
    const id = ctx.params.id;
    await ctx.model.Class.destroy({
      where: {
        id,
      },
    });
    ctx.body = '删除成功';
  }
}

module.exports = sequelizeClass;
