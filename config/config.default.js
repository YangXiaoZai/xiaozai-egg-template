/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1647856180176_8462';

  // add your middleware config here
  config.middleware = [ 'errorHandler' ];

  // 关闭CSRF （解决：post请求403）
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // 允许跨域
  config.cors = {
    origin: '*',
    allowMethods: 'GET,PUT,POST,DELETE,PATCH',
  };

  // 解析view
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  // ejs
  config.ejs = {
    delimiter: '%', // 默认值为%，不推荐修改
  };

  // mysql
  config.mysql = {
    app: true,
    agent: false, // 代理，默认为false
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'root',
      database: 'test-egg',
    },
  };

  // sequelize
  config.sequelize = {
    dialect: 'mysql',
    database: 'test-egg',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    timezone: '+08:00',
    define: {
      // 取消数据表名复数
      freezeTableName: true,
      // 自动写入时间戳 created_at updated_at
      timestamps: true,
      // 字段生成软删除时间戳 deleted_at
      // paranoid: true,
      // createdAt: 'created_at',
      // updatedAt: 'updated_at',
      // deletedAt: 'deleted_at',
      // 所有驼峰命名格式化
      underscored: false,
    },
    // 时间格式化
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
  };

  // 静态资源
  config.static = {
    prefix: '/public/', // 默认值为/public/'，不推荐修改
    dir: path.join(appInfo.baseDir, 'public'), // 后期部署可修改
    upload_dir: 'uploads',
  };


  // multipart
  config.multipart = {
    fileSize: '20mb',
    // fileExtensions: [
    //   '.docx',
    //   '.doc',
    //   '.xls',
    //   '.xlsx',
    // ],
  };

  // session
  config.session = {
    key: 'EGG_SESS', // 默认值为EGG_SESS'
    maxAge: 1000 * 60 * 60 * 2, // 过期时间，单位毫秒
    encrypt: true,
    renew: true, // 每次访问页面都会给session会话延长时间
  };

  // jwt
  config.jwt = {
    secret: 'xiaozai', // secret的值可调整
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
