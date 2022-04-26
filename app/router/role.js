'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;

  // 权限相关的controller
  router.get('/api/role/getResource', controller.role.getResource);
  router.post('/api/role/setResource', controller.role.setResource);
};
