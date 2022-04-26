'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const {
      INTEGER,
      STRING,
    } = Sequelize;
    // 创建表
    await queryInterface.createTable('article_type', {
      id: {
        type: INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      code: {
        type: STRING(30),
        allowNull: false,
        defaultValue: '',
        comment: '文章类型code值',
        unique: true,
      },
      name: {
        type: STRING(200),
        allowNull: false,
        defaultValue: '',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('article_type');
  },
};
