'use strict';

module.exports = app => {
  const {
    STRING,
    DOUBLE,
  } = app.Sequelize;
  // 默认情况，sequelize会自动将表转化为复数
  const Student = app.model.define('student', {
    // id默认自动创建
    name: STRING,
    achievement: DOUBLE,
    major: STRING,
  });

  Student.associate = () => { // A属于B
    app.model.Student.belongsTo(app.model.Class, {
      foreignKey: 'class_id', // 外键
      as: 'class', // 别名，联查表时使用
    });
  };

  return Student;
};