'use strict';

module.exports = app => {
  const {
    STRING,
  } = app.Sequelize;
  // 默认情况，sequelize会自动将表转化为复数
  const Articles = app.model.define(
    'articles',
    {
    // id默认自动创建
      title: STRING(20),
      type: STRING(20),
      cover: STRING(255),
      content: STRING(60),
    });

  return Articles;
};

