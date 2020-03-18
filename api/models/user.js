'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    role: DataTypes.ENUM(['admin', 'user']),
  }, {
    scopes: {
      hidePersonalData: {
        attributes: {
          exclude: ['password','createdAt','updatedAt']
        }
      }
    } 
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};