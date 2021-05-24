'use strict'

module.exports = function (Sequelize, DataTypes) {
    let alias = "User";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            default: 'default.jpg'
        }
    }
    let config = {
        tableName: "users",
        timestamps: false,
        paranoid: false,
    };

    let User = Sequelize.define(alias, cols, config);
    User.associate = (models) => {
        User.hasMany(models.Operation,{
            as: 'operations',
            foreignKey: 'userId'
        })
    }
    return User
}