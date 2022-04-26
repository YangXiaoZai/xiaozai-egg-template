'use strict';

module.exports = {
  // 方法
  currentFun() {
    return getNowDate();
  },
  // 属性
  get current() {
    return getNowDate();
  },
};

function getNowDate() {
  const now = new Date();
  return now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
}