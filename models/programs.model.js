// ORM
const Sequelize = require('sequelize');

/* Conexion con la base de datos */
const { sequelize } = require('../config/db-config');

// Declaracion de las columnas de la base de datos
exports.Programs = sequelize.define(
	'programs',
	{
		cod_pro: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		nam_pro: {
			type: Sequelize.STRING,
		},
		tip_pro: {
			type: Sequelize.STRING,
		},
		dur_pro: {
			type: Sequelize.STRING,
		},
		fky_universities: {
			type: Sequelize.INTEGER,
		},
	},
	{
		timestamps: false,
	}
);
