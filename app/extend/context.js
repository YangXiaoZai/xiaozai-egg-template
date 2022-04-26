'use strict';

module.exports = {
  getParams(key) {
    const method = this.request.method;
    if (method === 'GET') {
      return key ? this.query[key] : this.query;
    }
    const body = this.request.body;
    return key ? body[key] : body;
  },
};