"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.NAME || 'almacen', process.env.USER || 'root', process.env.DB_PASSWORD || 'admin12345', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
