"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME || 'almacen', process.env.DB_USER || 'root', process.env.DB_PASSWORD || 'admin12345', {
    dialect: 'mysql',
    port: 7283,
    host: process.env.DB_HOST || 'localhost',
});
exports.default = sequelize;
