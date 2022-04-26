'use strict';

module.exports = app => {
  const {
    STRING,
  } = app.Sequelize;
  // 默认情况，sequelize会自动将表转化为复数
  const Role = app.model.define(
    'roles',
    {
      name: STRING(60),
      code: STRING(60),
    });
  return Role;
};
