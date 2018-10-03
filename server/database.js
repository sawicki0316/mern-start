const Sequelize = require('sequelize');

const development = {
  database: 'test',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql',
};

var database = new Sequelize(
	development.database,
	development.username,
	development.password, {
	host: development.host,
	dialect: development.dialect,
	define: {
	  timestamps: false
	},
	logging: false,
	dialectOptions: {
        requestTimeout: 30000 // timeout = 30 seconds
    }
});

module.exports = database;