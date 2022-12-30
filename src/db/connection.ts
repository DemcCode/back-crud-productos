import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('almacen', 'root', 'admin12345', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;