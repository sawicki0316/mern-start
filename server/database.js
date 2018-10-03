const Sequelize = require('sequelize');

const development = {
  database: 'test',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql',
};

const database = new Sequelize(development.database, development.username, development.password, {	host: development.host, dialect: development.dialect, define: {	timestamps: false, },	logging: false, });
module.exports = database;
