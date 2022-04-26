'use strict';

module.exports = app => {
  const {
    STRING,
  } = app.Sequelize;
  // 默认情况，sequelize会自动将表转化为复数
  const Article = app.model.define(
    'article_type', {
      // id默认自动创建
      code: STRING(255),
      name: STRING(255),
    });

  return Article;
};
