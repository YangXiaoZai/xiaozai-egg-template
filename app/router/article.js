'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;

  // 文章相关的controller
  // router.get('/api/v1/article', controller.v1.article.getArticleType);
  router.resources('article', '/api/v1/article', controller.v1.article);
  router.get('/api/v1/articleType', controller.v1.article.getArticleType);
  // router.get('/api/v1/article/type', controller.v1.article.getArticleType);
  // router.post('/api/v1/uploads', controller.v1.uploads.upload);
};
