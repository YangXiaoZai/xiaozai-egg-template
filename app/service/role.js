'use strict';

const Service = require('egg').Service;

class roleService extends Service {
  // 获取资源
  async getResource() {
    try {
      const {
        app,
      } = this;
      // TODO model和mysql区别？
      // const res = await app.model.Resource.findAll();
      const res = await app.mysql.select('resource');
      if (res) {
        const root = [];
        const map = {};
        res.forEach(item => {
          item.children = [];
          map[item.id] = item;
          if (item.parent_id === 0) {
            root.push(item);
          } else {
            map[item.parent_id].children.push(item);
          }
        });
        return root;
      }
      return false;

    } catch (error) {
      console.log('err-service', error);
      return false;
    }
  }

  // 获取用户基本信息
  async setResource({
    roleId,
    resourceIds,
  }) {
    const {
      app,
    } = this;
    // 事务
    const conn = await app.mysql.beginTransaction();
    try {
      await conn.delete('role_resource', {
        role_id: roleId,
      });
      // TODO forEach调用异步 和 for循环调用异步的区别
      // resourceIds.forEach(async resourceId => {
      //   await conn.insert('role_resource12312', {
      //     role_id: roleId,
      //     resource_id: resourceId,
      //   });
      // });
      for (let i = 0; i < resourceIds.length; i++) {
        const resourceId = resourceIds[i];
        await conn.insert('role_resource1123', {
          role_id: roleId,
          resource_id: resourceId,
        });
      }
      await conn.commit();
      return true;
    } catch (error) {
      await conn.rollback();
      throw error;
    }


    // 没有事务
    // try {
    //   await app.mysql.delete('role_resource', {
    //     role_id: roleId,
    //   });
    //   resourceIds.forEach(async resourceId => {
    //     await app.mysql.insert('role_resource', {
    //       role_id: roleId,
    //       resource_id: resourceId,
    //     });
    //   });
    //   return true;
    // } catch (error) {
    //   console.log('err-service', error);
    //   return false;
    // }
  }

  // 更新用户基本信息
  async updateUserInfo({
    id,
    nickname,
    phone,
    introduction,
  }) {
    const {
      app,
    } = this;
    try {
      await app.model.User.update({
        nickname,
        phone,
        introduction,
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

module.exports = roleService;
