import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME || 'almacen', process.env.DB_USER || 'root', process.env.DB_PASSWORD || 'admin12345', {
    host: process.env.DB_HOST || 'localhost',
    port: 3306,    
    dialect: 'mysql'
  });

  export default sequelize;