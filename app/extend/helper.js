'use strict';

module.exports = {
  Base64Encode(str = '') {
    return new Buffer(str).toString('base64');
  },
};