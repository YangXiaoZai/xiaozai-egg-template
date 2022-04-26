'use strict';

const Service = require('egg').Service;

class studentService extends Service {
  // 获取学生列表
  async getStudents(id) {
    const {
      app,
    } = this;
    try {
      let data;
      if (id) {
        data = await app.model.Student.findAll({
          where: {
            id,
          },
        });
      } else {
        data = await app.model.Student.findAll();
      }
      return data;
    } catch (error) {
      return null;
    }
  }

  // 创建学生
  async createStudent({
    name,
    achievement,
    major,
  }) {
    const {
      app,
    } = this;
    try {
      await app.model.Student.create({
        name,
        achievement,
        major,
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  // 更新学生
  async updateStudent({
    id,
    name,
    achievement,
    major,
  }) {
    const {
      app,
    } = this;
    try {
      await app.model.Student.update({
        name,
        achievement,
        major,
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

  // 删除学生
  async destroyStudent(id) {
    const {
      app,
    } = this;
    try {
      await app.model.Student.destroy({
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

module.exports = studentService;
