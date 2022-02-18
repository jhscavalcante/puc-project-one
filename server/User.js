const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Users extends Model{}

Users.init({
    firstname: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'user'
})

module.exports = Users;