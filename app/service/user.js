'use strict';

const Service = require('egg').Service;

class userService extends Service {
  // 登录
  async login({
    username,
    password,
  }) {
    try {
      const { app } = this;
      const res = await app.model.Users.scope('withPassword').findOne({
        where: {
          username,
          password,
        },
      });
      if (res) {
        const token = app.jwt.sign({ username }, app.config.jwt.secret);
        return token;
      }
      return false;

    } catch (error) {
      console.log('err-service', error);
      throw error;
    }
  }

  // 获取用户基本信息
  async getUserInfo({ username }) {
    const { app } = this;
    try {
      const res = await app.model.Users.findOne({
        where: {
          username,
        },
      });
      if (res) {
        res.dataValues.roles = [ res.dataValues.roles ];
        return res;
      }
      return null;
    } catch (error) {
      console.log('err-service', error);
      return false;
    }

  }

  // 更新用户基本信息
  async updateUserInfo({
    id,
    nickname,
    phone,
    introduction,
    avatar,
    email,
  }) {
    const { app } = this;
    try {
      await app.model.Users.update({
        nickname,
        phone,
        introduction,
        avatar,
        email,
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
}
module.exports = userService;
