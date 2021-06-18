const dotenv = require('dotenv');

dotenv.config();

// ORM para la base de datos
const Sequelize = require('sequelize');

// Configuracion de las base de datos
exports.sequelize = new Sequelize(process.env.DEV_DB_SCHEMA, process.env.DEV_DB_USER, process.env.DEV_DB_PASSWORD, {
	host: 'localhost',
	dialect: 'postgres',
	pool: {
		max: 5,
		min: 0,
		require: 30000,
		idle: 10000,
	},
	logging: false,
});
