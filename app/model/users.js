'use strict';

module.exports = app => {
  const {
    STRING,
    // DATE,
  } = app.Sequelize;
  // 默认情况，sequelize会自动将表转化为复数
  const user = app.model.define(
    'users',
    {
    // id默认自动创建
      username: STRING(60),
      password: STRING(60),
      roles: STRING(255),
      nickname: STRING(60),
      email: STRING(60),
      phone: STRING(15),
      avatar: STRING(255),
      introduction: STRING(255),
      // deleted_at: DATE,
      // last_login: DATE,
    },
    {
    // 默认不返回密码，如想返回，使用时User.scope('withPassword').findAll()
      paranoid: true,
      defaultScope: {
        attributes: {
          exclude: [ 'password' ],
        },
      },
      scopes: {
        withPassword: {
          attributes: {},
        },
      },
    });

  return user;
};
