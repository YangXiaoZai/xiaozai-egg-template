'use strict';

const Service = require('egg').Service;

class testdbService extends Service {
  async addStudent(params) {
    try {
      const {
        app,
      } = this;
      const res = await app.mysql.insert('students', params);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async delStudent(params) {
    try {
      const {
        app,
      } = this;
      const res = await app.mysql.delete('students', params);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateStudent(params) {
    try {
      const {
        app,
      } = this;
      const res = await app.mysql.update('students', params);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getStudents() {
    try {
      const {
        app,
      } = this;
      const res = await app.mysql.select('students');
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  }

}
module.exports = testdbService;