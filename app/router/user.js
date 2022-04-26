'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;

  // 用户相关的controller
  router.post('/user/login', controller.user.login);
  router.get('/user/info', controller.user.getUserInfo);
  router.post('/user/info', controller.user.updateUserInfo);
};
