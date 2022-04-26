'use strict';

const Controller = require('egg').Controller;

class articleController extends Controller {
  // 获取全部文章
  async index() {
    const {
      ctx,
    } = this;
    // 获取?后面的参数
    const params = ctx.query;
    const data = await this.ctx.service.article.getArticle(params);
    let body;
    if (data) {
      body = {
        code: 20000,
        data,
      };
    } else {
      body = {
        code: 50000,
        message: '获取文章列表失败',
      };
    }
    ctx.body = body;
  }
  // 获取某个文章详情
  async show() {
    const {
      ctx,
    } = this;
    const id = ctx.params.id;
    const data = await this.ctx.service.article.getArticle({ id });
    let body;
    if (data) {
      body = {
        code: 20000,
        data,
      };
    } else {
      body = {
        code: 50000,
        message: '获取文章详情失败',
      };
    }
    ctx.body = body;
  }
  // 创建文章
  async create() {
    const {
      ctx,
    } = this;
    const params = ctx.request.body;
    const data = await this.ctx.service.article.createArticle(params);
    let body;
    if (data) {
      body = {
        code: 20000,
        data,
      };
    } else {
      body = {
        code: 50000,
        message: '创建文章失败',
      };
    }
    ctx.body = body;
  }
  // 更新文章
  async update() {
    const {
      ctx,
    } = this;
    const id = ctx.params.id;
    const params = ctx.request.body;
    const data = await ctx.service.article.updateArticle({
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
  // // 删除文章
  async destroy() {
    const {
      ctx,
    } = this;
    const id = ctx.params.id;
    let body;
    const data = await ctx.service.article.destroyArticle(id);
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
  // 获取文章的类型
  async getArticleType() {
    const {
      ctx,
    } = this;
    const data = await this.ctx.service.article.getArticleType();
    let body;
    if (data) {
      body = {
        code: 20000,
        data,
      };
    } else {
      body = {
        code: 50000,
        message: '获取文章类型',
      };
    }
    ctx.body = body;
  }
}

module.exports = articleController;
