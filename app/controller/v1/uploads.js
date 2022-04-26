'use strict';

const Controller = require('egg').Controller;

/**
 * @controller 上传资源 upload
 */
const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');

// 异步二进制 写入流
const awaitWriteStream = require('await-stream-ready').write;
// 管道读入一个虫洞。
const sendToWormhole = require('stream-wormhole');

class uploadController extends Controller {
  /**
     * @apikey
     * @summary 上传 文件
     * @description 上传 文件
     * @router post /api/v1/uploads
     * @request body menuBodyReq
     */
  async upload() {
    const {
      ctx,
      app,
    } = this;
    // 获取流文件
    const stream = await ctx.getFileStream();
    // 获取请求头中文本大小
    const size = ctx.request.header['content-length'];
    // 系统配置的最大限制 20M
    const {
      fileSize,
    } = app.config.multipart;
    console.log('fileSize', fileSize);
    if (size > fileSize) {
      ctx.body = {
        code: 50000,
        message: `文件大小不可超过${fileSize / 1024 / 1024}Mb`,
      };
      return;
    }
    if (/^image\/.*$/i.test(stream.mimeType) && size > 5 * 1024 * 1024) {
      ctx.body = {
        code: 50000,
        message: '图片大小不可超过5Mb',
      };
      return;
    }
    if (/^video\/.*$/i.test(stream.mimeType) && size > 20 * 1024 * 1024) {
      ctx.body = {
        code: 50000,
        message: '图片大小不可超过20Mb',
      };
      return;
    }

    // 正常逻辑处理
    // 获取项目配置
    const {
      public_uploads_path,
      prefix,
      upload_dir,
    } = app.config.static;
    // 获取前端传递过来的文件名称
    const filename = stream.filename;
    // 处理文件名称 (时间戳 + 随机数 + 后缀名)
    const nowDate = dayjs();
    // 获取文件后缀名 (eg:  .png)
    const extension = path.extname(stream.filename);
    const randomName = `${nowDate.format('YYYYMMDDHHmmss')}_${Math.random()
      .toString().substr(2, 9)}${extension}`;
    // 生成文件路径
    const target = path.join(public_uploads_path, randomName);
    console.log('public_uploads_path', public_uploads_path);
    // 生成一个文件写入 文件流
    const writeStream = fs.createWriteStream(target);
    // 异步写入文件流
    try {
      await awaitWriteStream(stream.pipe(writeStream));
      ctx.body = {
        code: 20000,
        data: {
          filename,
          path: path.join(prefix, upload_dir, randomName),
          file_type: stream.mimeType,
          size,
          extension,
        },
      };
    } catch (error) {
      await sendToWormhole(stream);
      ctx.throw(500, error);
      throw error;
    }
  }
}


module.exports = uploadController;
