'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;

  // 用户相关controller
  require('./router/user')(app);
  // 权限相关
  require('./router/role')(app);
  // 文章相关
  require('./router/article')(app);

  //
  /**
   * 资源上传
   */
  router.post('/api/v1/uploads', controller.v1.uploads.upload);

  // ！！！！！！！！！！！！！！！！！ 以下内容可以部署时干掉 ！！！！！！！！！！！！！！！！！//

  router.get('/', controller.home.index);
  router.get('/xiaozai', controller.home.xiaozai);
  router.get('/xiaozaiController', controller.xiaozai.index);
  router.get('/getMoney', controller.xiaozai.getMoney);
  // 自由传参模式
  router.get('/getSchoolNotice', controller.get.getSchoolNotice);
  // 严格传参模式
  router.get('/getSchoolNotice2/:school/:level', controller.get.getSchoolNotice2);

  // POST
  router.post('/addSchool', controller.post.index);

  // 使用service
  router.get('/getService/:id', controller.getService.index);

  // 使用view
  router.get('/useView', controller.useView.index);

  // 增删改查
  router.get('/cookie', app.middleware.counter(), controller.cookie.index);
  router.get('/add', controller.cookie.add);
  router.post('/del', controller.cookie.del);
  router.post('/update', controller.cookie.update);
  router.get('/get', controller.cookie.get);

  // 获取参数
  router.post('/extend', controller.extend.index);
  // router.get('/extend/:id', controller.extend.index);
  // 获取token
  router.post('/token', controller.extend.token);
  router.get('/setToken', controller.extend.setToken);
  router.get('/helper', controller.extend.helper);

  // 数据库增删改查
  router.get('/addStudent', controller.studentsManager.addStudent);
  router.get('/delStudent', controller.studentsManager.delStudent);
  router.get('/updateStudent', controller.studentsManager.updateStudent);
  router.get('/getStudents', controller.studentsManager.getStudents);

  // RESTful风格
  router.resources('class', '/class', controller.class);

  // login
  router.post('/loginBySession', controller.loginBySession.index);
  router.get('/getUserInfoBySession', controller.loginBySession.getInfo);

  // jwt
  router.post('/loginByJWT', controller.loginByJWT.index);
  router.get('/getUserInfoByJWT', app.middleware.checkToken(), controller.loginByJWT.getInfo);

  // 使用sequelize
  router.resources('sequelizeClass', '/sequelizeClass', controller.sequelizeClass);
  router.resources('sequelizeStudent', '/sequelizeStudent', controller.sequelizeStudent);

};
