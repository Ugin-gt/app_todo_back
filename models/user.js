'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate (models) {
      User.hasMany(models.Todo, {
        foreignKey: 'userId',
        onDelete: 'cascade',
        onUpdate: 'restrict',
      });
    }
  }
  User.init(
    {
      firstName: {
        field: 'first_name',
        allowNull: false,
        type: DataTypes.STRING(128),
        validate: {
          is: /^[\wА-я]{2,}$/,
          notNull: true,
          notEmpty: true,
        },
      },
      lastName: {
        field: 'last_name',
        allowNull: false,
        type: DataTypes.STRING(128),
        validate: {
          is: /^[\wА-я]{2,}$/,
          notNull: true,
          notEmpty: true,
        },
      },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING(128),
        validate: {
          notNull: true,
          notEmpty: true,
          isEmail: true,
        },
      },
      isMale: {
        field: 'is_male',
        type: DataTypes.BOOLEAN,
      },
    },

    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      underscored: true,
    }
  );
  return User;
};
