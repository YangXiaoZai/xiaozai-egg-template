'use strict';

module.exports = app => {
  const {
    STRING,
  } = app.Sequelize;
  // 默认情况，sequelize会自动将表转化为复数
  const Class = app.model.define('class', {
    // id默认自动创建
    name: STRING,
  });

  return Class;
};