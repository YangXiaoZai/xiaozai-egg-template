'use strict';

const {
  app,
} = require('egg-mock/bootstrap');

describe('test/app/controller/xiaozai.test.js', () => {
  it('it should get ', () => {
    return app.httpRequest()
      .get('/xiaozaiController')
      .expect(200)
      .expect('<h1>小在的Controller</h1>');
  });

  it('getMoney', () => {
    return app.httpRequest()
      .get('/getMoney')
      .expect(200)
      .expect('<h1>先赚他一个亿</h1>');
  });
});
