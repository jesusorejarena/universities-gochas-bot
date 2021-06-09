const { Universities } = require('../models/universities.model');
const { Programs } = require('../models/programs.model');

const { Op } = require('sequelize');

exports.getProgramsAll = async () => {
	try {
		const programs = await Programs.findAll();
		return programs;
	} catch (err) {
		return `Error in get data in database:${err.message}`;
	}
};

exports.getUniversitiesAll = async () => {
	try {
		const universities = await Universities.findAll();
		return universities;
	} catch (err) {
		return `Error in get data in database:${err.message}`;
	}
};

exports.getUniversityById = async (siglas) => {
	try {
		const university = await Universities.findOne({
			where: { sig_uni: siglas },
		});
		return university;
	} catch (err) {
		return `Error in get data in database:${err.message}`;
	}
};

exports.getProgramsByUni = async (id, type) => {
	try {
		const programs = await Programs.findAll({
			where: { fky_universities: id, dur_pro: { [Op.like]: `%${type}%` } },
		});
		return programs;
	} catch (err) {
		return `Error in get data in database:${err.message}`;
	}
};
