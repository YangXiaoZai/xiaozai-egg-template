'use strict';

const Controller = require('egg').Controller;

class cookieController extends Controller {
  async index() {
    const {
      ctx,
      app,
    } = this;
    console.log(ctx.session.counter);
    // xiaozai.html与view文件夹下文件对应
    await ctx.render('xiaozai.html', {
      // time: app.currentFun(),
      time: app.current,
      school: '清华大学',
      major: '计算机',
      subject: ['计算机组成原理', '计算机发展史', '网络安全管理'],
    });
  }
  async add() {
    const {
      ctx,
    } = this;
    ctx.cookies.set('user', '小在', {
      maxAge: 1000 * 20,
      encrypt: true,
    });
    ctx.session.userName = 'y.jinbiao';
    ctx.session.age = '20';
    ctx.body = {
      status: 200,
      data: '新增cookie成功',
    };
  }

  async del() {
    const {
      ctx,
    } = this;
    ctx.cookies.set('user', null);
    ctx.session.userName = null;
    ctx.session.age = null;
    ctx.body = {
      status: 200,
      data: '删除cookie成功',
    };
  }

  async update() {
    const {
      ctx,
    } = this;
    ctx.cookies.set('user', 'bilibili', {
      encrypt: true,
    });
    ctx.session.userName = 'yyy.jinbiao';
    ctx.body = {
      status: 200,
      data: '更新cookie成功',
    };
  }

  async get() {
    const {
      ctx,
    } = this;
    const user = ctx.cookies.get('user', {
      encrypt: true,
    });
    const userName = ctx.session.userName;
    const age = ctx.session.age;
    console.log('user', user);
    console.log('userName', userName);
    console.log('age', age);
    ctx.body = {
      status: 200,
      data: '查看cookie成功',
    };
  }
}

module.exports = cookieController;