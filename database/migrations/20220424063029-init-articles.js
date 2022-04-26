'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    /** * Add altering commands here. * * Example: * await queryInterface.createTable('users', { id: Sequelize.INTEGER }); */
    const {
      INTEGER,
      STRING,
    } = Sequelize;
    await queryInterface.createTable('articles', {
      id: {
        type: INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: STRING(20),
        allowNull: false,
        defaultValue: '',
        comment: '文章标题',
      },
      type: {
        type: STRING(20),
        allowNull: false,
        defaultValue: '',
        comment: '文章类型',
      },
      cover: {
        type: STRING(255),
        allowNull: false,
        defaultValue: '',
        comment: '封面',
      },
      content: {
        type: STRING(255),
        allowNull: false,
        defaultValue: '',
        comment: '文章类型',
      },
      status: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 1,
        comment: '文章状态',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    /** * Add reverting commands here. * * Example: * await queryInterface.dropTable('users'); */
    await queryInterface.dropTable('articles');
  },
};
