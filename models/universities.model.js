// ORM
const Sequelize = require('sequelize');

/* Conexion con la base de datos */
const { sequelize } = require('../config/db-config');

// Declaracion de las columnas de la base de datos
exports.Universities = sequelize.define(
	'universities',
	{
		cod_uni: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		sig_uni: {
			type: Sequelize.STRING,
		},
		nam_uni: {
			type: Sequelize.STRING,
		},
		img_uni: {
			type: Sequelize.STRING,
		},
		url_uni: {
			type: Sequelize.STRING,
		},
		add_uni: {
			type: Sequelize.STRING,
		},
		tip_uni: {
			type: Sequelize.STRING,
		},
		des_uni: {
			type: Sequelize.STRING,
		},
		lat_uni: {
			type: Sequelize.STRING,
		},
		lon_uni: {
			type: Sequelize.STRING,
		},
	},
	{
		timestamps: false,
	}
);
