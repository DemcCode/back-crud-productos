import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('almacen', 'root', 'admin12345', {
    host: 'localhost',
    dialect: 'mysql',
    port: 8889
  });

  export default sequelize;