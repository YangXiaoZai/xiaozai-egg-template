'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
  } = app.Sequelize;
  // 默认情况，sequelize会自动将表转化为复数
  const User = app.model.define(
    'resources', {
      // id默认自动创建
      name: STRING(60),
      parent_id: INTEGER(20),
    });

  return User;
};
