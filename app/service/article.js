'use strict';

const Service = require('egg').Service;

class articleService extends Service {
  // 获取文章
  async getArticle({ id, pageSize = 10, current = 1, title = '', type = '' }) {
    const { app } = this;
    const Op = app.Sequelize.Op;
    try {
      let data;
      if (id) {
        data = await app.model.Articles.findByPk(id);
      } else {
        data = await app.model.Articles.findAndCountAll({
          limit: Number(pageSize),
          offset: (Number(current) - 1) * Number(pageSize),
          where: {
            title: {
              // 模糊搜索
              [Op.like]: '%' + title + '%',
            },
            type: {
              // 模糊搜索
              [Op.like]: '%' + type + '%',
            },
          },
        });
        // data = await app.model.Articles.findAndCountAll();
      }
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  // 创建文章
  async createArticle({
    title,
    cover,
    type,
    content,
  }) {
    const {
      app,
    } = this;
    try {
      await app.model.Articles.create({
        title,
        cover,
        type,
        content,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // 更新文章
  async updateArticle({
    id,
    title,
    cover,
    type,
    content,
  }) {
    const {
      app,
    } = this;
    try {
      await app.model.Articles.update({
        title,
        cover,
        type,
        content,
      }, {
        where: {
          id,
        },
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  // 删除文章
  async destroyArticle(id) {
    const { app } = this;
    try {
      await app.model.Articles.destroy({
        where: {
          id,
        },
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  // 获取文章类型
  async getArticleType() {
    const {
      app,
    } = this;
    try {
      const data = await app.model.ArticleType.findAll();
      return data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = articleService;
