'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // 配置ejs
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  // 配置mysql
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  // 配置sequelize
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  // 配置cors
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // 配置jwt
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
};