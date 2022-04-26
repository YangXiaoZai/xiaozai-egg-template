'use strict';

module.exports = () => {
  return async (ctx, next) => {
    const token = ctx.request.header.authorization.split(' ')[1];
    // ctx.get('authorization')
    try {
      const decode = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
      if (decode) {
        await next(); // 验证通过，继续执行
      } else {
        ctx.body = {
          code: 40000,
          msg: '用户校验失败',
        };
      }

    } catch (error) {
      ctx.body = {
        code: 40000,
        msg: 'token未通过验证',
      };
    }
  };
};
