import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME || 'almacen', process.env.DB_USER || 'root', process.env.DB_PASSWORD || 'admin12345', {
  dialect: 'mysql',
  port: 7283,
  host: process.env.DB_HOST || 'localhost',
  });

  export default sequelize;