'use strict';

module.exports = () => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      // 记录日志
      ctx.app.emit('error', err, ctx);
      // 统一异常处理
      const status = err.status || 500;
      ctx.status = status;
      3;// 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error = status === 500 && ctx.app.config.env === 'prod' ? '服务器异常' : err.message;
      ctx.body = {
        message: error,
      };
    }
  };
};
